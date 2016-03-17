import Queueable from './interfaces/queueable';
import Task from './interfaces/task';

import FormattedTimePipe from './pipes/formatted-time.pipe';
import QueuedOnlyPipe from './pipes/queued-only.pipe';

import SettingsService from './services/settings.service';
import TaskService from './services/task.service';

const SHARED_PIPES: any[] = [
  FormattedTimePipe,
  QueuedOnlyPipe
];

const SHARED_PROVIDERS: any[] = [
  SettingsService,
  TaskService
];

export {
  Queueable,
  Task,

  FormattedTimePipe,
  QueuedOnlyPipe,
  SHARED_PIPES,

  SettingsService,
  TaskService,
  SHARED_PROVIDERS
};
