import { Directive, HostBinding, Input } from 'angular2/core';

@Directive({
    selector: '[pomodoroResize]'
})
export default class ResizeDirective {
    @Input() pomodoroResize: number;
    @HostBinding('style.width.px') get width (): number {
        return this.pomodoroResize;
    };
}
