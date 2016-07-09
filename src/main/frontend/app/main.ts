import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import AppComponent from "./app.component";
import {provide} from "@angular/core";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

bootstrap(<any> AppComponent, [
    HTTP_PROVIDERS, ROUTER_DIRECTIVES,ROUTER_PROVIDERS
]);