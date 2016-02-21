import { Component, Input, OnInit } from 'angular2/core';
import { TaskModel } from '../shared/shared';

@Component({
  selector: 'pomodoro-task-icons',
  template: `<img *ngFor="#icon of icons"
                  src="/app/shared/assets/img/pomodoro.png"
                  width="{{size}}">`
})
export default class TaskIconsComponent implements OnInit {
  @Input() task: TaskModel;
  @Input() size: number;
  icons: Object[] = [];

  ngOnInit() {
    for (let i = 0; i < this.task.pomodorosRequired; i++) {
      this.icons.push({ name: this.task.name });
    }
  }
}
