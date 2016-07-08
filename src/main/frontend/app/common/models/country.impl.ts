import {Country} from "./country";
/**
 * Created by serrut on 07/06/16.
 */

export class CountryImpl implements Country{
    alpha2code : string;
    name : string;

    constructor(rawData:any){
        this.alpha2code = rawData["alpha2Code"];
        this.name = rawData["name"];
    }

}