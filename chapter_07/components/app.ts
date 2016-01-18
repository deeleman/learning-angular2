import { Component, provide } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from 'angular2/router';
import PomodoroTaskList from './pomodoroTaskList/PomodoroTaskList';
import PomodoroTimerRouter from './pomodoroTimer/PomodoroTimerRouter';
import PomodoroForm from './pomodoroForm/PomodoroForm';
import PomodoroLogin from './pomodoroLogin/PomodoroLogin';
import { AuthService } from '../services/services';
import SecureRouterOutlet from '../directives/SecureRouterOutlet';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, SecureRouterOutlet],
    styles: [`
        body { padding-top: 60px; }
        .router-link-active { font-weight: bold; color: white!important; }
    `],
    template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <span class="navbar-brand">My Pomodoro App</span>
                </div>
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['TaskList']">Tasks</a></li>
                    <li *ngIf="userIsLogged"><a [routerLink]="['EditTask']">Publish Task</a></li>
                    <li><a [routerLink]="['Timer']">Standalone Timer</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li *ngIf="!userIsLogged"><a [routerLink]="['Login']">Login</a></li>
                    <li *ngIf="userIsLogged"><a (click)="logout()">Logout</a></li>
                </ul>
            </div>
        </nav>
        <secure-router-outlet protectedPath="edit" loginUrl="/login">
        </secure-router-outlet>
    `
})
@RouteConfig([
    { path: '/', name: 'Home', redirectTo: ['TaskList'] },
    { path: '/tasks', name: 'TaskList', component: PomodoroTaskList, useAsDefault: true },
    { path: '/timer/...', name: 'Timer', component: PomodoroTimerRouter },
    { path: '/edit', name: 'EditTask', component: PomodoroForm },
    { path: '/login', name: 'Login', component: PomodoroLogin }
])
export default class App {
    userIsLogged: boolean;

    constructor(
        private authService: AuthService,
        private router: Router) {
            authService.userLoginStatus.subscribe(loggedIn => {
                this.userIsLogged = loggedIn;
            });
        }

    logout(): void {
        this.authService.logout().then(success => {
            if(success) {
                this.router.navigateByUrl('/');
            }
        });
    }
}
