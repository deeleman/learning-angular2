import { Component, ViewEncapsulation, OnInit } from 'angular2/core';
import { FormattedTimePipe, QueuedPipe } from '../../pipes/pipes';
import { TaskModel } from '../../models/models';
import { TaskService, SettingsService } from '../../services/services';
import PomodoroIcon from '../PomodoroIcon/PomodoroIcon';

@Component({
    selector: 'pomodoro-task-list',
    directives: [PomodoroIcon],
    providers: [TaskService],
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
            private settingsService: SettingsService) {

        this.today = new Date();
        this.tasks = this.taskService.taskStore;

        this.pomodoroLength = settingsService.minutes;
    }

    ngOnInit(): void {
        this.renderPomodoros();
    }

    renderPomodoros() {
        this.queuedPomodoros = this.tasks
            .filter((taskModel: TaskModel) => taskModel.queued)
            .reduce((pomodoros: number, queuedTask: TaskModel) => pomodoros + queuedTask.pomodorosRequired, 0);
    }

    toggleTask(task: TaskModel): void {
        task.queued = !task.queued;
        this.renderPomodoros();
    }
};
