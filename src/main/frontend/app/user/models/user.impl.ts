/**
 * Created by serrut on 07/06/16.
 */
import {User} from './user'
export class UserImp implements User{

    userName:string;
    email:string;
    password:string;
    country : string;
    birthday : Date;


    constructor(authData: any){
        this.email = authData.password.email;
    }
}