import 'rxjs/add/operator/map';
import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode, provide } from 'angular2/core';
import { LocationStrategy, HashLocationStrategy } from 'angular2/router';
import AppComponent from './app/app';

enableProdMode();

bootstrap(AppComponent, [
    // Uncomment the line below to enable hash-based navigation
    //provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
