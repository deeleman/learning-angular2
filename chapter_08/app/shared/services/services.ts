import LocalizationService from './localization';
import SettingsService from './settings';
import TaskService from './tasks';
import AuthenticationService from './authentication';

const POMODORO_PROVIDERS: any[] = [
    LocalizationService,
    SettingsService,
    TaskService,
    AuthenticationService
];

export {
    POMODORO_PROVIDERS,
    LocalizationService,
    SettingsService,
    TaskService,
    AuthenticationService
};
