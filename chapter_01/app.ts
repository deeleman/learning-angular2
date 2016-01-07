import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector: 'app',
    template: `
        <h1> {{ minutes }}:{{ seconds  | number: '2.0' }} </h1>
        <p><button (click)="togglePause()" class="btn btn-danger"> {{ buttonLabel }} </button></p>
    `
})
class Pomodoro {
    minutes: number;
    seconds: number;
    isPaused: boolean;
    buttonLabel: string;

    constructor() {
        this.resetPomodoro();
        setInterval(() => this.countDown(), 1000);
    }

    resetPomodoro(): void {
        this.minutes = 24;
        this.seconds = 59;
        this.buttonLabel = 'Start';
        this.togglePause();
    }

    countDown(): void {
        if (!this.isPaused) {
            this.buttonLabel = 'Pause';

            if (--this.seconds < 0) {
                this.seconds = 59;
                if (--this.minutes < 0) {
                    this.resetPomodoro();
                }
            }
        }
    }

    togglePause(): void {
        this.isPaused = !this.isPaused;
        if (this.minutes < 24 || this.seconds < 59) {
            this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
        }
    }
}

bootstrap(Pomodoro, []);
