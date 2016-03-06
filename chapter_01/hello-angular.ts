import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
  selector: 'hello-angular',
  template: '<h1> {{greeting}} </h1>'
})
class HelloAngularComponent {
  greeting: string;
  constructor() {
    this.greeting = 'Hello Angular 2!';
  }
}

bootstrap(HelloAngularComponent); // Component is bootstrapped!
