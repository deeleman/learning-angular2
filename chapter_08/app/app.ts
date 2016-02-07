import { Component, ViewEncapsulation } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { FORM_PROVIDERS } from 'angular2/common';
import { POMODORO_PROVIDERS } from './shared/services/services';
import TasksListComponent from './tasks/components/tasks-list';
import TimerComponent from './timer/components/timer';
import TasksEditorComponent from './tasks/components/tasks-editor';
import LoginFormComponent from './login/components/login-form';
import { AuthenticationService } from './shared/services/services';
import RouterOutletDirective from './shared/directives/router-outlet';

@Component({
    selector: 'pomodoro-app',
    directives: [ROUTER_DIRECTIVES, RouterOutletDirective],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, FORM_PROVIDERS, POMODORO_PROVIDERS],
    styles: [`
        .router-link-active {
            font-weight: bold;
            border-bottom: 2px #d9534f solid;
        }
    `],
    template: `
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <strong class="navbar-brand">My Pomodoro App</strong>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li><a [routerLink]="['TasksListComponent']">Tasks</a></li>
                    <li *ngIf="userIsLogged"><a [routerLink]="['TasksEditorComponent']">Publish Task</a></li>
                    <li><a [routerLink]="['TimerComponent']">Standalone Timer</a></li>
                    <li *ngIf="!userIsLogged"><a [routerLink]="['LoginFormComponent']">Login</a></li>
                    <li *ngIf="userIsLogged"><a href="#" (click)="logout($event)">Logout</a></li>
                </ul>
            </div>
        </nav>
        <pomodoro-router-outlet protectedPath="tasks-editor" loginUrl="login">
        </pomodoro-router-outlet>
    `
})
@RouteConfig([
    { path: '',             name: 'Home',                   redirectTo: ['TasksListComponent'] },
    { path: 'tasks',        name: 'TasksListComponent',     component: TasksListComponent, useAsDefault: true },
    { path: 'timer/...',    name: 'TimerComponent',         component: TimerComponent },
    { path: 'tasks-editor', name: 'TasksEditorComponent',   component: TasksEditorComponent },
    { path: 'login',        name: 'LoginFormComponent',     component: LoginFormComponent }
])
export default class AppComponent {
    userIsLogged: boolean;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router) {
            authenticationService.userLoginStatus.subscribe(userIsloggedIn => {
                this.userIsLogged = userIsloggedIn;
            });
        }

    logout($event): void {
        $event.preventDefault();

        this.authenticationService.logout().then(success => {
            if(success) {
                this.router.navigateByUrl('/');
            }
        });
    }
}
