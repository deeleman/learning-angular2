function Log(target: Function, key: string, parameterIndex: number) {
    var functionLogged = key || target.prototype.constructor.name;
    console.log(`The parameter in position ${parameterIndex} at ${constructorCalled} has been decorated`);
}

class MyGreeterClass {
    greeting: string;
    constructor( @Log phrase: string) {
        this.greeting = phrase;
    }
}
