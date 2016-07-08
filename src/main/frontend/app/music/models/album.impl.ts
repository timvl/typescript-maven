/**
 * Created by serrut on 07/06/16.
 */
import {Album,AlbumImageSize} from './album'
import {Song} from "./song";

export class AlbumImpl implements Album{

    constructor(public id:number,
    public name:string,
    public artist:string,
    public url:string,
    public images:Array<string>,
    public songs : Array<Song>) {

    }

    getImage(size:AlbumImageSize) {
        let image = this.images.find((image) => (image["size"] == size));
        return image ? image["#text"] : undefined;

    }
}