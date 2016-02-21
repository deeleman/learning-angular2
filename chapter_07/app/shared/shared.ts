import Queueable from './models/queueable';
import TaskModel from './models/task';

import FormattedTimePipe from './pipes/formatted-time.pipe';
import QueuedOnlyPipe from './pipes/queued-only.pipe';

import LocalizationService from './services/localization.service';
import SettingsService from './services/settings.service';
import TaskService from './services/task.service';

const POMODORO_PROVIDERS: any[] = [
  LocalizationService,
  SettingsService,
  TaskService
];

export {
  Queueable,
  TaskModel,

  FormattedTimePipe,
  QueuedOnlyPipe,

  LocalizationService,
  SettingsService,
  TaskService,
  POMODORO_PROVIDERS
};
