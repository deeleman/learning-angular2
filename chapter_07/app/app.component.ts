import { Component } from 'angular2/core';
import { TimerComponent } from './timer/timer';
import { TasksComponent, TaskEditorComponent } from './tasks/tasks';
import { SHARED_PROVIDERS } from './shared/shared';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'pomodoro-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [SHARED_PROVIDERS, HTTP_PROVIDERS, ROUTER_PROVIDERS],
  styles: [`
      .router-link-active {
          font-weight: bold;
          border-bottom: 2px #d9534f solid;
      }
  `],
  template: `
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      <div class="navbar-header">
        <strong class="navbar-brand">My Pomodoro App</strong>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li><a [routerLink]="['TasksComponent']">Tasks</a></li>
        <li><a [routerLink]="['TimerComponent']">Timer</a></li>
        <li><a [routerLink]="['TaskEditorComponent']">Publish Task</a></li>
      </ul>
    </div>
  </nav>
  <router-outlet>
  </router-outlet>
  `
})
@RouteConfig([
  { path: '', name: 'Home', redirectTo: ['TasksComponent'] },
  { path: 'tasks', name: 'TasksComponent', component: TasksComponent, useAsDefault: true },
  { path: 'tasks/editor', name: 'TaskEditorComponent', component: TaskEditorComponent },
  { path: 'timer/...', name: 'TimerComponent', component: TimerComponent }
])
export default class AppComponent {}
