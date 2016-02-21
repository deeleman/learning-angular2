import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { TimerWidgetComponent } from './timer/timer';
import { TasksComponent } from './tasks/tasks';
import { POMODORO_PROVIDERS } from './shared/shared';

@Component({
    selector: 'pomodoro-app',
    directives: [TimerWidgetComponent, TasksComponent],
    providers: [HTTP_PROVIDERS, POMODORO_PROVIDERS],
    template: `
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <strong class="navbar-brand">My Pomodoro App</strong>
                </div>
            </div>
        </nav>
        <pomodoro-timer-widget></pomodoro-timer-widget>
        <pomodoro-tasks></pomodoro-tasks>
    `
})
export default class AppComponent {}
