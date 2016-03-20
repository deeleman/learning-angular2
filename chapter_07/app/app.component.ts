import { Component } from 'angular2/core';
import { SHARED_PROVIDERS } from './shared/shared';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { TimerComponent } from './timer/timer';
import { TasksComponent, TaskEditorComponent } from './tasks/tasks';

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
  templateUrl: 'app/app.component.html'
})
@RouteConfig([
  { path: '',               name: 'Home',                 redirectTo: ['TasksComponent'] },
  { path: 'tasks',          name: 'TasksComponent',       component: TasksComponent, useAsDefault: true },
  { path: 'tasks/editor',   name: 'TaskEditorComponent',  component: TaskEditorComponent },
  { path: 'timer/...',      name: 'TimerComponent',       component: TimerComponent }
])
export default class AppComponent {}
