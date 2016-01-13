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
    name: 'time'
})
class ConvertToHoursMinutes {
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
class Queued {
    transform(tasks: any[], args?: any[]): Task[] {
        return tasks.filter((x: any) => x.queued === args[0]);
    }
}

/// Custom Directives ******

@Directive({
    selector: '[reduceTo]'
})
class ReduceTo {
    @Input() reduceTo: number;
    @HostBinding('style.width.px') get width (): number {
        return this.reduceTo;
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

class Task {
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
    directives: [ReduceTo],
    templateUrl: 'views/pomodoroIcon.html'
})
class PomodoroIcon {}

/// - Application View Component

@Component({
    selector: 'pomodoro-tasks',
    directives: [PomodoroIcon, Multiply],
    pipes: [ConvertToHoursMinutes, Queued],
    encapsulation: ViewEncapsulation.Emulated,
    styleUrls: ['styles/pomodoroTasks.css'],
    templateUrl: 'views/pomodoroTasks.html'
})
class PomodoroTasks {
    today: Date;
    tasks: Task[];
    queuedPomodoros: number;

    constructor() {
        const dataStore: DataStore = new DataStore();
        this.tasks = dataStore.items.map((x: any) => new Task(x.name, x.deadline, x.timeRequired));
        this.today = new Date();
    }

    toggleTask(task: Task): void {
        task.queued = !task.queued;
        this.queuedPomodoros = this.tasks
            .filter((x: Task) => x.queued)
            .reduce((pomodoros: number, queuedTask: Task) => pomodoros + queuedTask.pomodorosRequired, 0);
    }
};

bootstrap(PomodoroTasks);
