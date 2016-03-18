import { Component } from 'angular2/core';
import { Title } from 'angular2/platform/browser';
import {
  Router,
  ROUTER_DIRECTIVES,
  ComponentInstruction,
  CanActivate,
  OnActivate,
  CanDeactivate,
OnDeactivate } from 'angular2/router';
import { Task, TaskService, AuthenticationService } from '../shared/shared';

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
//@CanActivate(AuthService.grantAccess) // NOTE: Refer to book for details on commented code
export default class TaskEditorComponent implements OnActivate, CanDeactivate, OnDeactivate {
  task: Task;
  changesSaved: boolean;

  constructor(
    private title: Title,
    private router: Router,
    private taskService: TaskService) {
    this.task = <Task>{};
  }

  saveTask() {
    this.task.deadline = new Date(this.task.deadline.toString());
    this.taskService.addTask(this.task);
    this.changesSaved = true;
    this.router.navigate(['TasksComponent']);
  }

  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
    this.title.setTitle('Welcome to the Task Form!');
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    // NOTE: Refer to book for details on commented code
    //return this.changesSaved || confirm('Are you sure you want to leave?');
    return !AuthenticationService.grantAccess() ||
      this.changesSaved ||
      confirm('Are you sure you want to leave?');
  }

  routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    this.title.setTitle('My Angular 2 Pomodoro Timer');
  }
}
