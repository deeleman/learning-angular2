import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { PomodoroTimerComponent } from './pomodoro-timer.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [PomodoroTimerComponent],
  bootstrap: [PomodoroTimerComponent],
})
export class AppModule { }
