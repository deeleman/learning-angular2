class Calculator {
    @LogOutput
    double(num: number): number {
        return num * 2;
    }
}

var calc = new Calculator();
calc.double(11);

console.log(calc.loggedOutput); // Check [Object] array in console
