import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: '<h1 class="text-center"> {{greeting}} </h1>'
})
export class HelloAngularComponent {
  greeting: string;
  constructor() {
    this.greeting = 'Hello Angular 2!';
  }
}
