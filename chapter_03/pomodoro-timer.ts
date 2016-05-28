import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'countdown',
  template: '<h1>Time left: {{seconds}}</h1>',
  styles: ['h1 { color: #900 }'],
  encapsulation: ViewEncapsulation.Emulated
})
class CountdownComponent {
  @Input() seconds: number;
  intervalId: number;
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() progress: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  private tick(): void {
    if (--this.seconds < 1) {
      clearTimeout(this.intervalId);
      this.complete.emit(null);
    }
    this.progress.emit(this.seconds);
  }
}

@Component({
  selector: 'pomodoro-timer',
  directives: [CountdownComponent],
  templateUrl: './pomodoro-timer.html'
})
class PomodoroTimerComponent {
  onCountdownCompleted(): void {
    alert('Time up!');
  }
}

bootstrap(PomodoroTimerComponent);
