function Log(target: Function, key: string, parameterIndex: number) {
    var functionLogged = key || target.prototype.constructor.name;
    console.log(`The parameter in position ${parameterIndex} at ${constructorCalled} has been decorated`);
}

class Greeter {
    greeting: string;
    constructor( @Log phrase: string) {
        this.greeting = phrase;
    }
}

// The console will output right after the class above is defined:
// 'The parameter in position 0 at Greeter has been decorated'
