import { Component, ViewEncapsulation, Pipe, Directive, ElementRef, DynamicComponentLoader, HostBinding, Input, enableProdMode } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

enableProdMode(); // Impure pipes throw exceptions in Dev Mode under Beta.1.

/// Local Data Store Class ******

class DataStore {
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

/// Custom Pipes ******

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
    name: 'queued',
    pure: false
})
class QueuedPipe {
    transform(taskModels: any[], args?: any[]): TaskModel[] {
        return taskModels.filter((taskModel: TaskModel) => taskModel.queued === args[0]);
    }
}

/// Custom Directives ******

@Directive({
    selector: '[resizeTo]'
})
class ResizeTo {
    @Input() resizeTo: number;
    @HostBinding('style.width.px') get width(): number {
        return this.resizeTo;
    };
}

@Directive({
    inputs: ['multiply'],
    selector: '[multiply]'
})
class Multiply {
    dynamicComponentLoader: DynamicComponentLoader;
    elementRef: ElementRef;

    constructor(dynamicComponentLoader: DynamicComponentLoader, elementRef: ElementRef) {
        this.dynamicComponentLoader = dynamicComponentLoader;
        this.elementRef = elementRef;
    }

    set multiply(value: number) {
        for (let i: number = 0; i < value - 1; i++) {
            this.dynamicComponentLoader.loadIntoLocation(PomodoroIcon, this.elementRef, 'template');
        }
    }
}

/// Model class ******

class TaskModel {
    name: string;
    deadline: Date;
    queued: boolean;
    pomodorosRequired: number;

    constructor(name?: string, deadline?: any, timeRequired: number = 25, queued: boolean = false) {
        this.name = name;
        this.deadline = new Date(deadline);
        this.queued = queued;
        this.pomodorosRequired = Math.floor(timeRequired / 25);
    }
}

/// Component classes ******

/// - Pomodoro Icon Component

@Component({
    selector: 'pomodoro-icon',
    directives: [ResizeTo],
    templateUrl: 'views/pomodoroIcon.html'
})
class PomodoroIcon {}

/// - Application View Component

@Component({
    selector: 'pomodoro-tasks',
    directives: [PomodoroIcon, Multiply],
    pipes: [FormattedTimePipe, QueuedPipe],
    encapsulation: ViewEncapsulation.Emulated,
    styleUrls: ['styles/pomodoroTasks.css'],
    templateUrl: 'views/pomodoroTasks.html'
})
class PomodoroTasks {
    today: Date;
    tasks: TaskModel[];
    queuedPomodoros: number;

    constructor() {
        const dataStore: DataStore = new DataStore();
        this.tasks = dataStore.items.map((object: any) => new TaskModel(object.name, object.deadline, object.timeRequired));
        this.today = new Date();
    }

    renderPomodoros() {
        this.queuedPomodoros = this.tasks
            .filter((taskModel: TaskModel) => taskModel.queued)
            .reduce((pomodoros: number, queuedTask: TaskModel) => pomodoros + queuedTask.pomodorosRequired, 0);
    }

    toggleTask(task: TaskModel): void {
        task.queued = !task.queued;
        this.renderPomodoros();
    }
};

bootstrap(PomodoroTasks);
