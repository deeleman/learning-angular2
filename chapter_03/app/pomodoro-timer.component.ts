import { Component } from '@angular/core';

@Component({
  selector: 'pomodoro-timer',
  templateUrl: './pomodoro-timer.html'
})
export class PomodoroTimerComponent {
  onCountdownCompleted(): void {
    alert('Time up!');
  }
}
