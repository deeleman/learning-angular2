function Greeter(greeting: string) {
    return function(target: Function) {
        target.prototype.greet = function(): void {
            console.log(greeting);
        }
    }
}

@Greeter('Howdy!')
class MyGreetingClass {
    constructor() {
        // Implementation goes here...
    }
}

var myClass = new MyClass();
myClass.greet();
