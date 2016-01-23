import 'rxjs/add/operator/map';
import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode, provide } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from 'angular2/router';
import { TaskService, SettingsService, LocalizationService } from './services/services';
import PomodoroApp from './components/PomodoroApp';

enableProdMode();

bootstrap(PomodoroApp, [
    TaskService,
    SettingsService,
    LocalizationService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    // Uncomment the line below totry out custom app paths
    //provide(APP_BASE_HREF, { useValue: '/my-apps/pomodoro-app' }),
    // Uncomment the line below to try out hash-based navigation
    //provide(LocationStrategy, { useClass: HashLocationStrategy })

]);
