import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import TimerWidgetComponent from './timer-widget';

@Component({
    selector: 'pomodoro-timer',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    { path: '/standalone', name: 'Standalone', component: TimerWidgetComponent, useAsDefault: true },
    { path: '/task/:id', name: 'Task', component: TimerWidgetComponent },
])
export default class TimerComponent {}
