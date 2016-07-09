
import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes } from '@angular/router';
import {FORM_PROVIDERS, FORM_DIRECTIVES, Control} from '@angular/common';
import {Http} from '@angular/http';
import {LoginComponent} from "./user/login.component";
import {RegistrationComponent} from "./user/registration.component";
import {FooterComponent} from "./common/footer.component";
import {HeaderComponent} from "./common/header.component";
import {WelcomeComponent} from "./common/welcome.component";
import {AlbumComponent} from "./music/album.component";
import {AlbumsComponent} from "./music/albums.component";

//noinspection TypeScriptValidateTypes
@Component({
    selector: 'app-component',
    template: `<header-component></header-component>
               <div class ="container">
                <router-outlet></router-outlet>
               </div>
               <footer-component></footer-component>`,
    directives : [ROUTER_DIRECTIVES, FooterComponent, HeaderComponent],
    providers: [ROUTER_PROVIDERS]
})

@Routes([
    {path: '/',         component: WelcomeComponent},
    {path: '/albums',       component: AlbumsComponent},
    {path: '/album',        component: AlbumComponent},
    {path: '/login',        component: LoginComponent},
    {path: '/registration', component: RegistrationComponent}
])
export default class AppComponent {
    constructor(){
    }
}
