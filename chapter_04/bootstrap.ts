import 'rxjs/add/operator/map';
import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode } from 'angular2/core';
import { SettingsService, LocalizationService } from './services/services';
import PomodoroApp from './components/PomodoroApp';

enableProdMode();

bootstrap(PomodoroApp, [
    SettingsService,
    LocalizationService
]);
