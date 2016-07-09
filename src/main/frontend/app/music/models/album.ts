import {Song} from "./song";
/**
 * Created by serrut on 07/06/16.
 */
export interface Album{
    id: number;
    name : string;
    artist : string;
    url : string;
    images? : Array<string>;
    songs? : Array<Song>;

    getImage(size:AlbumImageSize);
}

export enum AlbumImageSize{
    LARGE = <any> "large",
    MEDIUM = <any> "medium",
    SMALL = <any> "small"
}