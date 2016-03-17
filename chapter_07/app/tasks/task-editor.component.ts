import { Component } from 'angular2/core';
import { Title } from 'angular2/platform/browser';
import {
  Router,
  ROUTER_DIRECTIVES,
  ComponentInstruction,
  OnActivate,
  CanDeactivate,
  OnDeactivate } from 'angular2/router';

@Component({
  selector: 'pomodoro-tasks-editor',
  directives: [ROUTER_DIRECTIVES],
  providers: [Title],
  templateUrl: 'app/tasks/task-editor.component.html',
  styles: [`
        .ng-valid { border-color: #3c763d; }
        .ng-invalid { border-color: #a94442; }
        .ng-untouched { border-color: #999999; }
    `]
})
export default class TaskEditorComponent implements OnActivate, CanDeactivate, OnDeactivate {

  constructor(
      private title: Title,
      private router: Router) {
  }

  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
      this.title.setTitle('Welcome to the Task Form!');
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
      return confirm('Are you sure you want to leave?');
  }

  routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
      this.title.setTitle('My Angular 2 Pomodoro Timer');
  }
}
