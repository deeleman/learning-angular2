///<reference path="node_modules/angular2/typings/browser.d.ts"/>
import { Component, EventEmitter, ViewEncapsulation, Input } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
  selector: 'countdown',
  template: '<h1>Time left: {{seconds}}</h1>',
  encapsulation: ViewEncapsulation.Emulated,
  outputs: ['onComplete: countdownComplete', 'secondsChanged: seconds']
})
class CountdownComponent {
  @Input() seconds: number;
  intervalId: any; // The TypeScript compiler complains when the intervalId is typed as number
  onComplete: EventEmitter<any> = new EventEmitter();
  secondsChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.intervalId = setInterval(() => this.countDownSeconds(), 1000);
  }

  countDownSeconds(): void {
    if (--this.seconds < 1) {
      clearTimeout(this.intervalId);
      this.onComplete.emit(null);
    }
    this.secondsChanged.emit(this.seconds);
  }
}

@Component({
  selector: 'pomodoro-timer',
  directives: [CountdownComponent],
  encapsulation: ViewEncapsulation.None,
  template: `<div class="container text-center">
               <img src="assets/img/tomato.png" alt="Pomodoro" />
               <countdown [seconds]="timeout" #timer
                 (seconds)="timeout = $event"
                 (countdownComplete)="onCountdownCompleted()">
               </countdown>
               <p (click)="timer.seconds = 50">
                 Only <strong>{{timeout}} seconds</strong> left.
                 Click me to reset countdown to 50 seconds.
               </p>
            </div>`
})
class PomodoroTimerComponent {
  timeout: number = 10;
  onCountdownCompleted(): void {
    alert('Time up!');
  }
}

bootstrap(PomodoroTimerComponent);
