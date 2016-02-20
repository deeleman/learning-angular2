import HighlightDirective from './directives/highlight.directive';
import RouterOutletDirective from './directives/router-outlet.directive';

import Queueable from './models/queueable';
import TaskModel from './models/task';

import FormattedTimePipe from './pipes/formatted-time.pipe';
import QueuedOnlyPipe from './pipes/queued-only.pipe';

import AuthenticationService from './services/authentication.service';
import LocalizationService from './services/localization.service';
import SettingsService from './services/settings.service';
import TaskService from './services/task.service';

const POMODORO_PROVIDERS: any[] = [
  AuthenticationService,
  LocalizationService,
  SettingsService,
  TaskService
];

export {
  HighlightDirective,
  RouterOutletDirective,

  Queueable,
  TaskModel,

  FormattedTimePipe,
  QueuedOnlyPipe,

  AuthenticationService,
  LocalizationService,
  SettingsService,
  TaskService,
  POMODORO_PROVIDERS
};
