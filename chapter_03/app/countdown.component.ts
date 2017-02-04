import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'countdown',
  template: '<h1>Time left: {{seconds}}</h1>',
  styles: ['h1 { color: #900 }'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CountdownComponent {
  @Input() seconds: number;
  intervalId: number;
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
