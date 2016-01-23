import { Component } from 'angular2/core';
import { SettingsService } from '../services/services';
import PomodoroTimer from './pomodoroTimer/PomodoroTimer';
import PomodoroTaskList from './pomodoroTaskList/PomodoroTaskList';

@Component({
    selector: 'pomodoro-app',
    directives: [PomodoroTimer, PomodoroTaskList],
    template: `
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <strong class="navbar-brand">My Pomodoro App</strong>
                </div>
            </div>
        </nav>
        <pomodoro-timer [time]="minutes"></pomodoro-timer>
        <pomodoro-task-list></pomodoro-task-list>
    `
})
export default class PomodoroApp {
    minutes: number;

    constructor(settingsService: SettingsService) {
        this.minutes = settingsService.minutes;
    }
}
