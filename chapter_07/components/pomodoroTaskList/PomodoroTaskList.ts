import { Component, ViewEncapsulation, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { ConvertToHoursMinutes, Queued } from '../../pipes/pipes';
import { Task } from '../../models/models';
import { TaskService } from '../../services/services';
import PomodoroIcon from '../PomodoroIcon/PomodoroIcon';

@Component({
    selector: 'pomodoro-task-list',
    directives: [PomodoroIcon],
    pipes: [ConvertToHoursMinutes, Queued],
    encapsulation: ViewEncapsulation.Emulated,
    styleUrls: ['components/pomodoroTaskList/styles.css'],
    templateUrl: 'components/pomodoroTaskList/template.html'
})
export default class PomodoroTaskList implements OnInit {
    today: Date;
    tasks: Task[];
    queuedPomodoros: number;

    constructor(private taskService: TaskService, private router: Router) {
        this.today = new Date();
        this.tasks = this.taskService.taskStore;
    }

    ngOnInit(): void {
        this.taskService.tasks.subscribe(updatedTasks => this.tasks = updatedTasks);
        this.renderPomodoros();
    }

    renderPomodoros() {
        this.queuedPomodoros = this.tasks
        .filter((x: Task) => x.queued)
        .reduce((pomodoros: number, queuedTask: Task) => pomodoros + queuedTask.pomodorosRequired, 0);
    }

    workOn(index: number): void {
        this.router.navigate(['Timer', 'Task', { id: index }]);
    }

    toggleTask(task: Task): void {
        task.queued = !task.queued;
        this.renderPomodoros();
    }
};
