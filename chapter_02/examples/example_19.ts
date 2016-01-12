function hello(name: string): string;
function hello(names: string[]): string;
function hello(names: any, greeting?: string): string {
    var namesArray: string[];

    if (Array.isArray(names)) {
        namesArray = names;
    } else {
        namesArray = [names];
    }

    if (!greeting) {
        greeting = 'Hello';
    }

    return greeting + ', ' + namesArray.join(' and ') + '!';
}
