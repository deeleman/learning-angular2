import 'rxjs/add/operator/map';
import { bootstrap, enableDebugTools } from 'angular2/platform/browser';
import { ComponentRef } from 'angular2/core';
import AppComponent from './app/app.component';

// Uncomment the line below to enable Angular 2 execution in production mode
//enableProdMode();

bootstrap(AppComponent, []).then((ref: ComponentRef)=> enableDebugTools(ref));
