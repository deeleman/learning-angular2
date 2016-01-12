function delayedGreeting(name): void {
    this.name = name;
    this.greet = function() {
        setTimeout(() => alert('Hello ' + this.name), 0);
    }
}
