function Greeter(target: Function): void {
    target.prototype.greet = function(): void {
        console.log('Hello!');
    }
}

@Greeter
class MyGreetingClass {
    constructor() {
        // Implementation goes here...
    }
}
