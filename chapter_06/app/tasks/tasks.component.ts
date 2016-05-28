import { Component, OnInit } from '@angular/core';
import TaskIconsComponent from './task-icons.component';
import TaskTooltipDirective from './task-tooltip.directive';
import {
  TaskService,
  SettingsService,
  Task,
  SHARED_PIPES
} from '../shared/shared';

@Component({
  selector: 'pomodoro-tasks',
  directives: [TaskIconsComponent, TaskTooltipDirective],
  pipes: [SHARED_PIPES],
  styleUrls: ['app/tasks/tasks.component.css'],
  templateUrl: 'app/tasks/tasks.component.html'
})
export default class TasksComponent implements OnInit {
  today: Date;
  tasks: Task[] = [];
  queuedPomodoros: number;
  queueHeaderMapping: any;
  timerMinutes: number;

  constructor(
    private taskService: TaskService,
    private settingsService: SettingsService) {

    this.tasks = this.taskService.taskStore;
    this.today = new Date();
    this.queueHeaderMapping = settingsService.pluralsMap.tasks;
    this.timerMinutes = settingsService.timerMinutes;
  }

  ngOnInit(): void {
    this.taskService.taskFeed.subscribe(newTask => {
      this.tasks.push(newTask);
      this.updateQueuedPomodoros();
    });
  }

  toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
  }

  private updateQueuedPomodoros(): void {
    this.queuedPomodoros = this.tasks
      .filter((Task: Task) => Task.queued)
      .reduce((pomodoros: number, queuedTask: Task) => {
      return pomodoros + queuedTask.pomodorosRequired;
    }, 0);
  }
};
