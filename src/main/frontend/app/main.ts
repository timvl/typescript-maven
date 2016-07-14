import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './services/in-memory-data.service';

import {bootstrap}    from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http';


import {AppComponent} from './components/app.component';
import {appRouterProviders} from './app.routes';

enableProdMode();

bootstrap(AppComponent, [
    appRouterProviders,
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: InMemoryDataService }
]);
