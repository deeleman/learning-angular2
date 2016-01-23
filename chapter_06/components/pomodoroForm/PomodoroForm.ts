import { Component } from 'angular2/core';
import { Title } from 'angular2/platform/browser';
import { ROUTER_DIRECTIVES, CanActivate, ComponentInstruction, OnActivate, CanDeactivate, OnDeactivate } from 'angular2/router';

@Component({
    selector: 'pomodoro-form',
    directives: [ROUTER_DIRECTIVES],
    providers: [Title],
    templateUrl: 'components/pomodoroForm/template.html'
})
@CanActivate((next: ComponentInstruction, prev: ComponentInstruction): boolean => {
    let passPhrase = prompt('Say the magic words');
    return (passPhrase === 'open sesame');
})
export default class PomodoroForm implements OnActivate, CanDeactivate, OnDeactivate {

    constructor(private title: Title) {}

    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        this.title.setTitle('Welcome to the Task Form!');
    }

    routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        return confirm('Are you sure you want to leave?');
    }

    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        this.title.setTitle('My Angular 2 Pomodoro Timer');
    }
}
