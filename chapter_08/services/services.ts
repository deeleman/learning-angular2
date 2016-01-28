import LocalizationService from './LocalizationService';
import SettingsService from './SettingsService';
import TaskService from './TaskService';
import AuthService from './AuthService';

const POMODORO_PROVIDERS: any[] = [
    LocalizationService,
    SettingsService,
    TaskService,
    AuthService
];

export {
    POMODORO_PROVIDERS,
    LocalizationService,
    SettingsService,
    TaskService,
    AuthService
};
