///<reference path="node_modules/angular2/typings/browser.d.ts"/>
import {
  Component,
  Input,
  Pipe,
  Directive,
  OnInit,
  HostListener
} from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

/// Local Data Service

class TaskService {
  items: Object[];

  constructor() {
    this.items = [
      {
        name: "Code an HTML Table",
        deadline: "Mon Jun 23 2015 12:00:00 GMT+0200 (CEST)",
        timeRequired: 25
      }, {
        name: "Sketch a wireframe for the new homepage",
        deadline: "Tue Jun 24 2016 12:00:00 GMT+0200 (CEST)",
        timeRequired: 50
      }, {
        name: "Style table with Bootstrap styles",
        deadline: "Wed Jun 25 2016 12:00:00 GMT+0200 (CEST)",
        timeRequired: 25
      }, {
        name: "Reinforce SEO with custom sitemap.xml",
        deadline: "Wed Jun 26 2016 12:00:00 GMT+0200 (CEST)",
        timeRequired: 75
      }
    ];
  }
}

/// Model class

class TaskModel {
  name: string;
  deadline: Date;
  queued: boolean;
  pomodorosRequired: number;

  constructor(
    name?: string,
    deadline?: any,
    timeRequired: number = 25,
    queued: boolean = false
  ) {
    this.name = name;
    this.deadline = new Date(deadline);
    this.queued = queued;
    this.pomodorosRequired = Math.floor(timeRequired / 25);
  }
}

/// Custom Pipes

@Pipe({
  name: 'formattedTime'
})
class FormattedTimePipe {
  transform(totalMinutes: number): string {
    let minutes: number = totalMinutes % 60;
    let hours: number = Math.floor(totalMinutes / 60);
    return `${hours}h:${minutes}m`;
  }
}

@Pipe({
  name: 'queuedOnly',
  pure: false
})
class QueuedOnlyPipe {
  transform(taskModels: TaskModel[], args?: any[]): TaskModel[] {
    return taskModels.filter((taskModel: TaskModel) => {
      return taskModel.queued === args[0];
    });
  }
}

/// Custom Directives

@Directive({
  selector: '[task]'
})
class PomodoroTooltipDirective {
  private defaultTooltipText: string;
  @Input() task: TaskModel;
  @Input() taskTooltip: any;

  @HostListener('mouseover')
  onMouseOver() {
    if(!this.defaultTooltipText && this.taskTooltip) {
      this.defaultTooltipText = this.taskTooltip.innerText;
    }
    this.taskTooltip.innerText = this.task.name;
  }
  @HostListener('mouseout')
  onMouseOut() {
    if(this.taskTooltip) {
      this.taskTooltip.innerText = this.defaultTooltipText;
    }
  }
}

/// Component classes

/// - Child Icon Component

@Component({
  selector: 'pomodoro-icon',
  template: `<img *ngFor="#icon of icons"
                  src="/assets/img/pomodoro.png"
                  width="{{size}}">`
})
class PomodoroIconComponent implements OnInit {
  @Input() task: TaskModel;
  @Input() size: number;
  icons: Object[] = [];

  ngOnInit() {
    for (let i = 0; i < this.task.pomodorosRequired; i++) {
      this.icons.push({ name: this.task.name });
    }
  }
}

/// - Main Parent Component

@Component({
  selector: 'pomodoro-tasks',
  directives: [PomodoroIconComponent, PomodoroTooltipDirective],
  pipes: [FormattedTimePipe, QueuedOnlyPipe],
  styleUrls: ['pomodoro-tasks.css'],
  templateUrl: 'pomodoro-tasks.view.html'
})
class PomodoroTasksComponent {
  today: Date;
  tasks: TaskModel[];
  queuedPomodoros: number;

  constructor() {
    const taskService: TaskService = new TaskService();
    this.tasks = taskService.items.map((rawTaskObject: any) => {
      return new TaskModel(
        rawTaskObject.name,
        rawTaskObject.deadline,
        rawTaskObject.timeRequired);
    });
    this.today = new Date();
  }

  toggleTask(task: TaskModel): void {
    task.queued = !task.queued;
    this.queuedPomodoros = this.tasks
      .filter((taskModel: TaskModel) => taskModel.queued)
      .reduce((pomodoros: number, queuedTask: TaskModel) => {
        return pomodoros + queuedTask.pomodorosRequired;
      }, 0);
  }
};

bootstrap(PomodoroTasksComponent);
