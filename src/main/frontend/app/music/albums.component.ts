/**
 * Created by serrut on 05/06/16.
 */
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouteSegment} from '@angular/router';
import {Album, AlbumImageSize} from './models/album';
import {MusicService} from './services/music.srv';
import {PaginationComponent} from '../common/pagination.component';
import {Pager} from '../common/models/pager';

@Component({
    selector : 'albums-component',
    template : `
        <ul class="media-list">
              <li class="media" *ngFor="#album of albums">
                <div class="media-left">
                    <a [routerLink]="['/album', { id : album.id }]">
                        <img class="media-object" [src]="album.getImage(albumImageSize)" >
                    </a>
                </div>
                <div class="media-body">
                  <h4 class="media-heading">{{album.name}}</h4>
                  {{album.artist}}
                </div>
              </li>
        </ul>
        <pagination-component [pager]="pager" [pathName]="'Albums'"></pagination-component>
    `,
    providers  : [MusicService],
    directives : [ROUTER_DIRECTIVES, <any>PaginationComponent]
})
export class AlbumsComponent {

    public albumImageSize:AlbumImageSize = AlbumImageSize.MEDIUM;
    public albums:Array<Album> = [];
    public pager:Pager;

    constructor(private musicService:MusicService, private routeParams:RouteSegment) {
        this.albumsSearch(this.routeParams.getParam("query"), 20);
    }

    albumsSearch(query:String, page:number) {
        this.musicService.albumsSearch(query)
            .subscribe(albums => {
                this.albums = albums;
            })
    }
}
