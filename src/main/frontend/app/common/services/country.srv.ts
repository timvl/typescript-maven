import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import "rxjs/add/operator/map";
import {Http, Response} from '@angular/http';

import {Country} from '../models/country';
import {CountryImpl} from "../models/country.impl";

@Injectable()
export class CountryService {

    private countryUrl = "https://restcountries.eu/rest/v1/all";
    private  testCountryFile = "./respository/testCountryData.json";
    constructor(private http:Http) {

    }

    getCountries() {
        return new Observable<Country[]>(observable => {

            this.http.get("https://restcountries.eu/rest/v1/all")
                .map(res => {
                    let body = res.json();
                    var countries:Array<Country> = [];
                    body.forEach(data => {
                        countries.push(new CountryImpl(data));
                    });
                    return countries;
                })
                .subscribe(countries => {
                    observable.next(countries);
                })
        });
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
