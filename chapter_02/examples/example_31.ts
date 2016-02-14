function Greeter(greeting: string) {
    return function(target: Function) {
        target.prototype.greet = function(): void {
            console.log(greeting);
        }
    }
}

@Greeter('Howdy!')
class Greeting {
    constructor() {
        // Implementation goes here...
    }
}

var myGreeting = new Greeting();
myGreeting.greet(); // console outputs 'Howdy!'
