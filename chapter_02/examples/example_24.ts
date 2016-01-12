function delayedGreeting(name): void {
    this.name = name;
    this.greet = function() {
        setTimeout(function() {
            alert('Hello ' + this.name);
        }, 0);
    }
}

var greeting = new delayedGreeting('Peter')
greeting.greet();
