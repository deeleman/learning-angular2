import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import TimerWidgetComponent from './timer-widget.component';

@Component({
  selector: 'pomodoro-timer',
  directives: [ROUTER_DIRECTIVES],
  template: '<router-outlet></router-outlet>'
})
@RouteConfig([
  { path: '/task/:id',  name: 'TaskTimer',      component: TimerWidgetComponent },
  { path: '/',          name: 'GenericTimer',   component: TimerWidgetComponent, useAsDefault: true }
])
export default class TimerComponent {}
