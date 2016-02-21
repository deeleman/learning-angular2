import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {
  TaskService,
  SettingsService,
  TaskModel,
  FormattedTimePipe,
  QueuedOnlyPipe,
  HighlightDirective
} from '../shared/shared';
import TaskIconsComponent from './task-icons.component';
import TaskTooltipDirective from './task-tooltip.directive';

@Component({
    selector: 'pomodoro-tasks',
    directives: [TaskIconsComponent, HighlightDirective, TaskTooltipDirective],
    pipes: [FormattedTimePipe, QueuedOnlyPipe],
    styleUrls: ['app/tasks/tasks.css'],
    templateUrl: 'app/tasks/tasks.html'
})
export default class TasksComponent implements OnInit {
    today: Date;
    tasks: TaskModel[];
    queuedPomodoros: number;
    pomodoroDuration: number;

    constructor(
            private taskService: TaskService,
            private settingsService: SettingsService,
            private router: Router) {

        this.today = new Date();
        this.tasks = this.taskService.taskStore;

        this.pomodoroDuration = settingsService.minutes;
    }

    ngOnInit(): void {
        this.taskService.tasks.subscribe(updatedTasks => this.tasks = updatedTasks);
        this.renderPomodoros();
    }

    renderPomodoros() {
      this.queuedPomodoros = this.tasks
        .filter((Task: TaskModel) => Task.queued)
        .reduce((pomodoros: number, queuedTask: TaskModel) => {
          return pomodoros + queuedTask.pomodorosRequired;
        }, 0);
    }

    workOn(index: number): void {
        this.router.navigate(['TimerComponent', 'TaskTimer', { id: index }]);
    }

    toggleTask(task: TaskModel): void {
        task.queued = !task.queued;
        this.renderPomodoros();
    }
};
