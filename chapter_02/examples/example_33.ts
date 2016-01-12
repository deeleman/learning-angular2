function LogChanges(callbackObject: any): void {
    return function(target: Object, key: string): void {
        var propertyValue: string = this[key];
        if (delete this[key]) {
            Object.defineProperty(target, key, {
                get: function() {
                    return propertyValue;
                },
                set: function(newValue) {
                    propertyValue = newValue;
                    callbackObject.onchange.call(this, propertyValue)
                }
            });
        }
    }
}

class WatchedPropertiesExample {
    @LogChanges({
        onchange: function(newValue: string): void {
            console.log(`The value of name just changed to ${newValue}`);
        }
    })
    name: string;
}
