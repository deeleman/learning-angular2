import { Component } from 'angular2/core';
import { Title } from 'angular2/platform/browser';
import { Router, ROUTER_DIRECTIVES, ComponentInstruction, CanActivate, OnActivate, CanDeactivate, OnDeactivate } from 'angular2/router';
import { TaskModel } from '../../shared/models/models';
import { TaskService, AuthenticationService } from '../../shared/services/services';

@Component({
    selector: 'pomodoro-tasks-editor',
    directives: [ROUTER_DIRECTIVES],
    providers: [Title],
    templateUrl: 'app/tasks/components/tasks-editor.html',
    styles: [`
        .ng-valid { border-color: #3c763d; }
        .ng-invalid { border-color: #a94442; }
        .ng-untouched { border-color: #999999; }
    `]
})
//@CanActivate(AuthService.grantAccess) // NOTE: Refer to book for details on commented code
export default class TasksEditorComponent implements OnActivate, CanDeactivate, OnDeactivate {
    taskModel: TaskModel;
    changesSaved: boolean;

    constructor(
        private title: Title,
        private router: Router,
        private taskService: TaskService) {
            this.taskModel = new TaskModel();
    }

    saveTask() {
        this.taskModel.deadline = new Date(this.taskModel.deadline.toString());
        this.taskService.addTask(this.taskModel);
        this.changesSaved = true;
        this.router.navigate(['TasksListComponent']);
    }

    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        this.title.setTitle('Welcome to the Task Form!');
    }

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        // NOTE: Refer to book for details on commented code
        //return this.changesSaved || confirm('Are you sure you want to leave?');
        return !AuthenticationService.grantAccess() || this.changesSaved || confirm('Are you sure you want to leave?');
    }

    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        this.title.setTitle('My Angular 2 Pomodoro Timer');
    }
}
