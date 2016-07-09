import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Album} from '../models/album';
import {AlbumImpl} from '../models/album.impl';
import {Song} from '../models/song';
import {SongImpl} from '../models/song.impl';
import "rxjs/add/operator/map";
import {Pager} from '../../common/models/pager';
import {PagerImpl} from '../../common/models/pager.impl';

@Injectable()
export class MusicService {

    private apiId = "34f4b6414a86a36295f43db1600772d0";

    constructor(private http:Http) {

    }

    albumsSearch(query:String, page:number = 0) {
        return new Observable<Album[]>(observable => {
            let pageParam:number = page + 1;
            let url = " http://ws.audioscrobbler.com/2.0/?method=album.search&album=" + query + "&format=json&api_key=" + this.apiId + "&page=1";
            this.http.get(url)
                .map(res => {
                    let body = res.json();
                    var albums:Array<Album> = [];
                    let results = body.results;
                    results.albummatches.album.forEach(data => {
                        albums.push(new AlbumImpl(data["mbid"], data["name"], data["artist"], data["url"], data["image"], null));
                    });
                    return  albums
                })
                .subscribe(res => {
                    observable.next(res);
                });
        });
    }

    albumInfo(id:String) {
        return new Observable<Album>(observable => {
            let url = "http://ws.audioscrobbler.com/2.0/?method=album.getInfo&mbid=" + id + "&format=json&api_key=" + this.apiId;
            this.http.get(url)
                .map(res => {
                    let body = res.json();
                    let data = body.album;

                    var songs:Array<Song> = [];
                    data.tracks.track.forEach(track => {
                        songs.push(new SongImpl(track.name));
                    });

                    let album:Album = new AlbumImpl(data["mbid"], data["name"], data["artist"], data["url"], data["image"], songs);
                    return album;
                })
                .subscribe(res => {
                    observable.next(res);
                })
        });
    }

}
