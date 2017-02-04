import { Component, NgModule, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Countdodwn child component
@Component({
  selector: 'countdown',
  template: '<h1>Time left: {{seconds}}</h1>',
  styles: ['h1 { color: #900 }'],
  encapsulation: ViewEncapsulation.Emulated
})
class CountdownComponent {
  @Input() seconds: number;
  intervalId: NodeJS.Timer;
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

// Pomodoro timer component with external template
@Component({
  selector: 'pomodoro-timer',
  templateUrl: '/app/pomodoro-timer.html'
})
class PomodoroTimerComponent {
  onCountdownCompleted(): void {
    alert('Time up!');
  }
}

// Main module, bootstrapping PomodoroTimerComponent as root component
@NgModule({
  imports: [BrowserModule],
  declarations: [PomodoroTimerComponent, CountdownComponent],
  bootstrap: [PomodoroTimerComponent],
})
export class AppModule { }

// Application bootstrap (specific for browser environments)
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
