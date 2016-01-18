import { Directive, HostBinding, Input } from 'angular2/core';

@Directive({
    selector: '[reduceTo]'
})
export default class ReduceTo {
    @Input() reduceTo: number;
    @HostBinding('style.width.px') get width (): number {
        return this.reduceTo;
    };
}
