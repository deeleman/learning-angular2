import { Component, ViewEncapsulation, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { FormattedTimePipe, QueuedPipe } from '../../pipes/pipes';
import { TaskModel } from '../../models/models';
import { TaskService, SettingsService } from '../../services/services';
import PomodoroIcon from '../PomodoroIcon/PomodoroIcon';
import Highlight from '../../directives/Highlight';

@Component({
    selector: 'pomodoro-task-list',
    directives: [PomodoroIcon, Highlight],
    pipes: [FormattedTimePipe, QueuedPipe],
    encapsulation: ViewEncapsulation.Emulated,
    styleUrls: ['components/pomodoroTaskList/styles.css'],
    templateUrl: 'components/pomodoroTaskList/template.html'
})
export default class PomodoroTaskList implements OnInit {
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
        this.router.navigate(['Timer', 'Task', { id: index }]);
    }

    toggleTask(task: TaskModel): void {
        task.queued = !task.queued;
        this.renderPomodoros();
    }
};
