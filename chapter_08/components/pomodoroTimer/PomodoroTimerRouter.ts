import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import PomodoroTimer from './PomodoroTimer';

@Component({
    selector: 'pomodoro-timer-router',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    { path: '/standalone', name: 'Standalone', component: PomodoroTimer, useAsDefault: true },
    { path: '/task/:id', name: 'Task', component: PomodoroTimer },
])
export default class PomodoroTimerRouter {}
