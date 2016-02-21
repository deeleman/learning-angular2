import { Component, Input, OnInit, ElementRef } from 'angular2/core';
import { RouteParams, CanReuse, OnReuse } from 'angular2/router';
import { TaskModel, TaskService, SettingsService } from '../shared/shared';
import { AnimationBuilder } from 'angular2/src/animate/animation_builder';
import { CssAnimationBuilder } from 'angular2/src/animate/css_animation_builder';

@Component({
  selector: 'pomodoro-timer-widget',
  providers: [AnimationBuilder],
  styleUrls: ['app/timer/timer-widget.component.css'],
  template: `
        <div class="text-center">
            <img src="/app/shared/assets/img/pomodoro.png"
                [ngClass]="{ pulse: !isPaused }"
                alt="Pomodoro">
            <h3><small>{{ taskName }}</small></h3>
            <h1> {{ minutes }}:{{ seconds  | number: '2.0' }} </h1>
            <p>
                <button (click)="togglePause()" class="btn btn-danger">
                {{ buttonLabel }}
                </button>
            </p>
        </div>
    `
})
export default class TimerWidgetComponent implements OnInit, CanReuse, OnReuse {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;
  taskName: string;
  fadeInAnimationBuilder: CssAnimationBuilder;

  constructor(
    private settingsService: SettingsService,
    private routeParams: RouteParams,
    private taskService: TaskService,
    private animationBuilder: AnimationBuilder,
    private elementRef: ElementRef) {
    this.fadeInAnimationBuilder = animationBuilder.css();
    this.fadeInAnimationBuilder.setDuration(1000)
      .setDelay(300)
      .setFromStyles({ opacity: 0 })
      .setToStyles({ opacity: 1 });
  }

  ngOnInit(): void {
    this.resetPomodoro();
    setInterval(() => this.tick(), 1000);

    let taskIndex = parseInt(this.routeParams.get('id'));
    if (!isNaN(taskIndex)) {
      this.loadTaskName(taskIndex);
    }

    let animation = this.fadeInAnimationBuilder.start(
      this.elementRef.nativeElement.firstElementChild);

    animation.onComplete(() => console.log('Animation completed!'));
  }

  private loadTaskName(index: number): void {
    this.taskName = this.taskService.taskStore[index].name;
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

  routerCanReuse(): boolean {
    return true;
  }

  routerOnReuse(): void {
    this.taskName = null;
    this.isPaused = false;
    this.resetPomodoro();
  }
}
