"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var TaskService = (function () {
    function TaskService() {
        this.taskStore = [];
        var tasks = [
            {
                name: "Code an HTML Table",
                deadline: "Jun 23 2015",
                pomodorosRequired: 1
            }, {
                name: "Sketch a wireframe for the new homepage",
                deadline: "Jun 24 2016",
                pomodorosRequired: 2
            }, {
                name: "Style table with Bootstrap styles",
                deadline: "Jun 25 2016",
                pomodorosRequired: 1
            }, {
                name: "Reinforce SEO with custom sitemap.xml",
                deadline: "Jun 26 2016",
                pomodorosRequired: 3
            }
        ];
        this.taskStore = tasks.map(function (task) {
            return {
                name: task.name,
                deadline: new Date(task.deadline),
                queued: false,
                pomodorosRequired: task.pomodorosRequired
            };
        });
    }
    return TaskService;
}());
var FormattedTimePipe = (function () {
    function FormattedTimePipe() {
    }
    FormattedTimePipe.prototype.transform = function (totalMinutes) {
        var minutes = totalMinutes % 60;
        var hours = Math.floor(totalMinutes / 60);
        return hours + "h:" + minutes + "m";
    };
    return FormattedTimePipe;
}());
FormattedTimePipe = __decorate([
    core_1.Pipe({
        name: 'pomodoroFormattedTime'
    })
], FormattedTimePipe);
var QueuedOnlyPipe = (function () {
    function QueuedOnlyPipe() {
    }
    QueuedOnlyPipe.prototype.transform = function (tasks) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return tasks.filter(function (task) {
            return task.queued === args[0];
        });
    };
    return QueuedOnlyPipe;
}());
QueuedOnlyPipe = __decorate([
    core_1.Pipe({
        name: 'pomodoroQueuedOnly',
        pure: false
    })
], QueuedOnlyPipe);
var TaskTooltipDirective = (function () {
    function TaskTooltipDirective() {
    }
    TaskTooltipDirective.prototype.onMouseOver = function () {
        if (!this.defaultTooltipText && this.taskTooltip) {
            this.defaultTooltipText = this.taskTooltip.innerText;
        }
        this.taskTooltip.innerText = this.task.name;
    };
    TaskTooltipDirective.prototype.onMouseOut = function () {
        if (this.taskTooltip) {
            this.taskTooltip.innerText = this.defaultTooltipText;
        }
    };
    return TaskTooltipDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TaskTooltipDirective.prototype, "task", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TaskTooltipDirective.prototype, "taskTooltip", void 0);
__decorate([
    core_1.HostListener('mouseover'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskTooltipDirective.prototype, "onMouseOver", null);
__decorate([
    core_1.HostListener('mouseout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskTooltipDirective.prototype, "onMouseOut", null);
TaskTooltipDirective = __decorate([
    core_1.Directive({
        selector: '[task]'
    })
], TaskTooltipDirective);
var TaskIconsComponent = (function () {
    function TaskIconsComponent() {
        this.icons = [];
    }
    TaskIconsComponent.prototype.ngOnInit = function () {
        this.icons.length = this.task.pomodorosRequired;
        this.icons.fill({ name: this.task.name });
    };
    return TaskIconsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TaskIconsComponent.prototype, "task", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], TaskIconsComponent.prototype, "size", void 0);
TaskIconsComponent = __decorate([
    core_1.Component({
        selector: 'pomodoro-task-icons',
        template: "<img *ngFor=\"let icon of icons\"\n                  src=\"/assets/img/pomodoro.png\"\n                  width=\"{{size}}\">"
    })
], TaskIconsComponent);
var TasksComponent = (function () {
    function TasksComponent() {
        this.queueHeaderMapping = {
            '=0': 'No pomodoros',
            '=1': 'One pomodoro',
            'other': '# pomodoros'
        };
        var taskService = new TaskService();
        this.tasks = taskService.taskStore;
        this.today = new Date();
        this.updateQueuedPomodoros();
    }
    TasksComponent.prototype.toggleTask = function (task) {
        task.queued = !task.queued;
        this.updateQueuedPomodoros();
    };
    TasksComponent.prototype.updateQueuedPomodoros = function () {
        this.queuedPomodoros = this.tasks
            .filter(function (task) { return task.queued; })
            .reduce(function (pomodoros, queuedTask) {
            return pomodoros + queuedTask.pomodorosRequired;
        }, 0);
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        selector: 'pomodoro-tasks',
        styleUrls: ['/app/pomodoro-tasks.css'],
        templateUrl: '/app/pomodoro-tasks.html'
    }),
    __metadata("design:paramtypes", [])
], TasksComponent);
;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        providers: [TaskService],
        declarations: [
            TaskIconsComponent,
            TaskTooltipDirective,
            FormattedTimePipe,
            QueuedOnlyPipe,
            TasksComponent
        ],
        bootstrap: [TasksComponent],
    })
], AppModule);
exports.AppModule = AppModule;
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(AppModule);
