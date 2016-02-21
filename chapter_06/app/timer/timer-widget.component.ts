import { Component, Input, OnInit } from 'angular2/core';
import { SettingsService } from '../shared/shared';

@Component({
  selector: 'pomodoro-timer-widget',
  template: `
        <div class="text-center">
            <img src="/app/shared/assets/img/pomodoro.png"
                alt="Pomodoro">
            <h1> {{ minutes }}:{{ seconds  | number: '2.0' }} </h1>
            <p>
                <button (click)="togglePause()" class="btn btn-danger">
                {{ buttonLabel }}
                </button>
            </p>
        </div>
    `
})
export default class TimerWidgetComponent {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.resetPomodoro();
    setInterval(() => this.tick(), 1000);
  }

  resetPomodoro(): void {
    this.isPaused = true;
    this.minutes = this.settingsService.minutes - 1;
    this.seconds = 59;
    this.buttonLabel = this.settingsService.labels['start'];
  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = this.settingsService.labels['pause'];

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
    if (this.minutes < this.settingsService.minutes || this.seconds < 59) {
      let buttonLabelKey = this.isPaused ? 'resume' : 'pause';
      this.buttonLabel = this.settingsService.labels[buttonLabelKey];
    }
  }
}
