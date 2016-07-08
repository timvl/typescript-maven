/**
 * Created by serrut on 07/06/16.
 */
import {Pager} from './pager'

export class  PagerImpl implements Pager {
    public pages:number = 0;

    constructor(public itemsPerPage:number,
                public starIndex:number,
                public totalResults:number,
                private maxPages:number = 10){
        var realMaxPages = Math.ceil(this.totalResults/this.itemsPerPage);
        if(realMaxPages <= maxPages){
            this.pages = realMaxPages;
        }else{
            this.pages = this.maxPages;
        }
    }
}