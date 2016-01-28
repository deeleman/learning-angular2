import { Directive, ElementRef, Input, OnInit } from 'angular2/core';
import { AnimationBuilder } from 'angular2/src/animate/animation_builder';
import { CssAnimationBuilder } from 'angular2/src/animate/css_animation_builder';

@Directive({
    selector: '[highlight]',
    providers: [AnimationBuilder],
    exportAs: 'highlight'
})
export default class Highlight implements OnInit {
    @Input('highlight') className: string;
    cssAnimationBuilder: CssAnimationBuilder;

    constructor(
            private animationBuilder: AnimationBuilder,
            private elementRef: ElementRef) {

        this.cssAnimationBuilder = animationBuilder.css();
    }

    ngOnInit() {
        if(this.className) {
            this.cssAnimationBuilder.setDuration(300)
                                    .addAnimationClass(this.className);
        }
    }

    animate() {
        this.cssAnimationBuilder.start(this.elementRef.nativeElement);
    }
}
