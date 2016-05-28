import { Component } from '@angular/core';
import {
  ROUTER_DIRECTIVES,
  CanActivate,
  ComponentInstruction,
  OnActivate,
  CanDeactivate,
  OnDeactivate } from '@angular/router-deprecated';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pomodoro-tasks-editor',
  directives: [ROUTER_DIRECTIVES],
  providers: [Title],
  templateUrl: 'app/tasks/task-editor.component.html'
})
@CanActivate((
  next: ComponentInstruction,
  prev: ComponentInstruction): boolean => {
  let passPhrase = prompt('Say the magic words');
  return (passPhrase === 'open sesame');
}
  )
export default class TaskEditorComponent implements OnActivate, CanDeactivate, OnDeactivate {

  constructor(private title: Title) { }

  routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction): void {
    this.title.setTitle('Welcome to the Task Form!');
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction): Promise<boolean> | boolean {
    return confirm('Are you sure you want to leave?');
  }

  routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction): void {
    this.title.setTitle('My Angular 2 Pomodoro Timer');
  }
}
