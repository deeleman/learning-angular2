import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import PomodoroTaskList from './pomodoroTaskList/PomodoroTaskList';
import PomodoroTimerRouter from './pomodoroTimer/PomodoroTimerRouter';
import PomodoroForm from './pomodoroForm/PomodoroForm';

@Component({
    selector: 'pomodoro-app',
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .router-link-active {
            font-weight: bold;
            border-bottom: 2px #999 solid;
        }
    `],
    template: `
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <strong class="navbar-brand">My Pomodoro App</strong>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li><a [routerLink]="['TaskList']">Tasks</a></li>
                    <li><a [routerLink]="['EditTask']">Publish Task</a></li>
                    <li><a [routerLink]="['Timer']">Standalone Timer</a></li>
                </ul>
            </div>
        </nav>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    { path: '/', redirectTo: ['TaskList'] },
    { path: '/tasks', name: 'TaskList', component: PomodoroTaskList, useAsDefault: true },
    { path: '/timer/...', name: 'Timer', component: PomodoroTimerRouter },
    { path: '/edit', name: 'EditTask', component: PomodoroForm }
])
export default class PomodoroApp {}
