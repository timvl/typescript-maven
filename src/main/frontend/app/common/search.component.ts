/**
 * Created by serrut on 05/06/16.
 */
import {Component,Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Component({
    selector: 'search-component',
    template: `
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search" (keyup)="onSearch(query, $event)" [(ngModel)]="query">
        </div>
        <button type="submit" class="btn btn-default" (click)="onSearch(query)">Search</button>
    `
})

export class SearchComponent {
    @Output() searchChange:EventEmitter<String> = new EventEmitter();

    constructor() {

    }
    onSearch(query:string, event?:KeyboardEvent) {
        if (!event || event.keyCode == 13) {
            this.searchChange.emit(query);
        }
    }
}