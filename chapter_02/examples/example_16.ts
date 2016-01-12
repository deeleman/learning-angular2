function greetMe(name: string, greeting?: string): string {
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + name;
}
