import { Directive, ElementRef } from 'angular2/core';
import { AnimationBuilder } from 'angular2/src/animate/animation_builder';
import { CssAnimationBuilder } from 'angular2/src/animate/css_animation_builder';

@Directive({
  selector: '.pomodoro-highlight',
  providers: [AnimationBuilder],
  exportAs: 'pomodoroHighlight'
})
export default class HighlightDirective {
  cssAnimationBuilder: CssAnimationBuilder;

  constructor(
    private animationBuilder: AnimationBuilder,
    private elementRef: ElementRef) {

    this.cssAnimationBuilder = animationBuilder.css()
      .setDuration(300)
      .setToStyles({ backgroundColor: '#fff5a0' });
  }

  colorize() {
    let animation = this.cssAnimationBuilder.start(
      this.elementRef.nativeElement
      );

    animation.onComplete(() => {
      animation.applyStyles({ backgroundColor: 'inherit' });
    });
  }
}
