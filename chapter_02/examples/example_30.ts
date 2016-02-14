function Greeter(target: Function): void {
  target.prototype.greet = function(): void {
    console.log('Hello!');
  }
}

@Greeter
class Greeting {
  constructor() {
    // Implementation goes here...
  }
}

var myGreeting = new Greeting();
myGreeting.greet();   // console outputs 'Hello!'
