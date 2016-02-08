import { Component, ViewEncapsulation, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { FormattedTimePipe, QueuedOnlyPipe } from '../../shared/pipes/pipes';
import { TaskModel } from '../../shared/models/models';
import { TaskService, SettingsService } from '../../shared/services/services';
import TaskIconsComponent from './task-icons';
import HighlightDirective from '../../shared/directives/highlight';

@Component({
    selector: 'pomodoro-tasks-list',
    directives: [TaskIconsComponent, HighlightDirective],
    pipes: [FormattedTimePipe, QueuedOnlyPipe],
    encapsulation: ViewEncapsulation.Emulated,
    styleUrls: ['app/tasks/components/tasks-list.css'],
    templateUrl: 'app/tasks/components/tasks-list.html'
})
export default class TasksListComponent implements OnInit {
    today: Date;
    tasks: TaskModel[];
    queuedPomodoros: number;
    pomodoroLength: number;

    constructor(
            private taskService: TaskService,
            private settingsService: SettingsService,
            private router: Router) {

        this.today = new Date();
        this.tasks = this.taskService.taskStore;

        this.pomodoroLength = settingsService.minutes;
    }

    ngOnInit(): void {
        this.taskService.tasks.subscribe(updatedTasks => this.tasks = updatedTasks);
        this.renderPomodoros();
    }

    renderPomodoros() {
        this.queuedPomodoros = this.tasks
            .filter((taskModel: TaskModel) => taskModel.queued)
            .reduce((pomodoros: number, queuedTask: TaskModel) => pomodoros + queuedTask.pomodorosRequired, 0);
    }

    workOn(index: number): void {
        this.router.navigate(['TimerComponent', 'TaskTimer', { id: index }]);
    }

    toggleTask(task: TaskModel): void {
        task.queued = !task.queued;
        this.renderPomodoros();
    }
};
