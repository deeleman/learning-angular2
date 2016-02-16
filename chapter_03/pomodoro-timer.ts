///<reference path="node_modules/angular2/typings/browser.d.ts"/>
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
  selector: 'countdown',
  template: '<h1>Time left: {{seconds}}</h1>',
  styles: ['h1 { color: #900 }'],
  encapsulation: ViewEncapsulation.Emulated
})
class CountdownComponent {
  @Input() seconds: number;
  intervalId: number;
  @Output() onComplete: EventEmitter<any> = new EventEmitter();
  @Output() onProgress: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    if (--this.seconds < 1) {
      clearTimeout(this.intervalId);
      this.onComplete.emit(null);
    }
    this.onProgress.emit(this.seconds);
  }
}

@Component({
  selector: 'pomodoro-timer',
  directives: [CountdownComponent],
  templateUrl: './pomodoro-timer.view.html'
})
class PomodoroTimerComponent {
  onCountdownCompleted(): void {
    alert('Time up!');
  }
}

bootstrap(PomodoroTimerComponent);
