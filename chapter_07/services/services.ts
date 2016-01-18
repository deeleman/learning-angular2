import Localization from './Localization';
import PomodoroConfig from './PomodoroConfig';
import TaskService from './TaskService';
import AuthService from './AuthService';

const POMODORO_PROVIDERS: any[] = [
    Localization,
    PomodoroConfig,
    TaskService,
    AuthService];

export {
    POMODORO_PROVIDERS,
    Localization,
    PomodoroConfig,
    TaskService,
    AuthService };
