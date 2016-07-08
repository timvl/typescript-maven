///<reference path="../../../node_modules/rxjs/Observable.d.ts"/>
/**
 * Created by serrut on 08/06/16.
 */
import {Observable} from 'rxjs/Observable'
import {Injectable} from '@angular/core';
import {UserImp} from '../models/user.impl'

@Injectable()
export class UserService {

   private _myFirebaseRef;


    constructor() {
        this._myFirebaseRef = new Firebase("https://radiant-inferno-6600.firebaseio.com/");
    }

    getUser():Observable  <UserImp>{
        return new Observable(observable => {
            this._myFirebaseRef.onAuth(authData => {
                let user;
                if (authData) {
                    user = new UserImp(authData);
                }
                observable.next(user);
            });
        });
    }

    login(email:string, password:string):Observable <UserImp>{
        return new Observable(observable => {
            this._myFirebaseRef.authWithPassword({
                email : email,
                password : password
            }, (error, authData) => {
                if (error) {
                    observable.error(error);
                } else {
                    observable.next(new UserImp(authData));
                }
            })
        });
    }

    register(email:string, password:string):Observable <UserImp> {
        return new Observable(observable => {
            this._myFirebaseRef.createUser({
                email : email,
                password : password
            }, (error, userData) => {
                if (error) {
                    observable.error(error);
                }  else {
                    this.login(email, password)
                        .subscribe(user => {
                            observable.next(user);
                        });
                }
            });
        });
    }

    logout():Observable <UserImp> {
        return new Observable(observable => {
            this._myFirebaseRef.unauth()
            observable.next();
        });
    }
}
