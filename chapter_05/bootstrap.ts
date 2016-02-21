///<reference path="node_modules/angular2/typings/browser.d.ts"/>

import 'rxjs/add/operator/map';
import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode, provide } from 'angular2/core';
import { LocationStrategy, HashLocationStrategy } from 'angular2/router';
import AppComponent from './app/app.component';

 // Uncomment the line below to enable Angular 2 execution in production mode
//enableProdMode();

bootstrap(AppComponent, [
    // Uncomment the line below to enable hash-based navigation
    //provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
