/**
 * Created by serrut on 05/06/16.
 */
import {Component} from '@angular/core';
import {Album} from "./models/album";
import {AlbumImageSize} from "./models/album";
import {MusicService} from "./services/music.srv";
import {RouteSegment, ROUTER_DIRECTIVES} from '@angular/router';
import {Song} from "./models/song";

@Component({
    selector: 'album-component',
    template:  `
        <div class="album" *ngIf="album">
            <div class="page-header">
              <h1>{{album.name}} <small>{{ album.artist }}</small></h1>
            </div>
            <div class="media">
              <div class="media-left">
                <a>
                  <img class="media-object" [src]="album.getImage(albumImageSize)">
                </a>
              </div>
              <div class="media-body">
                   <ul *ngFor="let song of album.songs">
                        <li>{{ song.name}}</li>
                   </ul>
              </div>
            </div>
        </div>
    `,
    providers  : [MusicService],
    directives : [ROUTER_DIRECTIVES]

})

export class AlbumComponent {

    public album:Album;
    public albumImageSize:AlbumImageSize = AlbumImageSize.LARGE;

    constructor(private musicService:MusicService, private routeParams:RouteSegment) {
        this.getAlbumInfo(this.routeParams.getParam("id"));
    }

    getAlbumInfo(query:String) {
        this.musicService.albumInfo(query)
            .subscribe(album => {
                this.album = album;
            })
    }
}
