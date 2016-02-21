import { Component, OnInit } from 'angular2/core';
import {
  TaskService,
  SettingsService,
  TaskModel,
  FormattedTimePipe,
  QueuedOnlyPipe
} from '../shared/shared';
import TaskIconsComponent from './task-icons.component';
import TaskTooltipDirective from './task-tooltip.directive';

@Component({
    selector: 'pomodoro-tasks',
    directives: [TaskIconsComponent, TaskTooltipDirective],
    pipes: [FormattedTimePipe, QueuedOnlyPipe],
    styleUrls: ['app/tasks/tasks.component.css'],
    templateUrl: 'app/tasks/tasks.component.html'
})
export default class TasksComponent implements OnInit {
    today: Date;
    tasks: TaskModel[];
    queuedPomodoros: number;
    pomodoroDuration: number;

    constructor(
            private taskService: TaskService,
            private settingsService: SettingsService) {

        this.tasks = this.taskService.taskStore;
        this.today = new Date();
        this.pomodoroDuration = settingsService.minutes;
    }

    ngOnInit(): void {
        this.updateQueuedPomodoros();
    }

    toggleTask(task: TaskModel): void {
      task.queued = !task.queued;
      this.updateQueuedPomodoros();
    }

    private updateQueuedPomodoros(): void {
      this.queuedPomodoros = this.tasks
        .filter((Task: TaskModel) => Task.queued)
        .reduce((pomodoros: number, queuedTask: TaskModel) => {
        return pomodoros + queuedTask.pomodorosRequired;
      }, 0);
    }
};
