import 'rxjs/add/operator/map';
import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode, provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { FORM_PROVIDERS } from 'angular2/common';
import { POMODORO_PROVIDERS } from './services/services';
import PomodoroApp from './components/PomodoroApp';

enableProdMode();

bootstrap(PomodoroApp, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    FORM_PROVIDERS,
    POMODORO_PROVIDERS,
    // Uncomment the line below to enable hash-based navigation
    //provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
