import 'rxjs/add/operator/map';
import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { SettingsService, LocalizationService } from './services/services';
import PomodoroApp from './components/PomodoroApp';

enableProdMode();

bootstrap(PomodoroApp, [
    SettingsService,
    LocalizationService,
    HTTP_PROVIDERS
]);
