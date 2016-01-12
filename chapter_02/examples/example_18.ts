function greetPeople(greeting: string, ...names: string[]): string {
    return greeting + ', ' + names.join(' and ') + '!';
}

alert(greetPeople('Hello', 'John', 'Ann', 'Fred'));
