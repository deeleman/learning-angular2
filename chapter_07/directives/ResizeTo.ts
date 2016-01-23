import { Directive, HostBinding, Input } from 'angular2/core';

@Directive({
    selector: '[resizeTo]'
})
export default class ReduceTo {
    @Input() resizeTo: number;
    @HostBinding('style.width.px') get width (): number {
        return this.resizeTo;
    };
}
