import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { PomodoroTimerComponent } from './pomodoro-timer.component';
import { CountdownComponent } from './countdown.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [PomodoroTimerComponent, CountdownComponent],
  bootstrap: [PomodoroTimerComponent],
})
export class AppModule { }
