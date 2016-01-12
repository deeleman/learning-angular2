// Two functions with the same typing but different logic
function sayHello(input: string): string {
    return 'Hello ' + input;
}

function sayHi(input: string): string {
    return 'Hi ' + input;
}

// Here we declare the variable with its function type
var greetMe: (name: string) => string;

// Last, we assign a function to the variable
greetMe = sayHello;
