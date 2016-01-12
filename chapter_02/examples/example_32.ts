function LogChanges(target: Object, key: string) {
    var propertyValue: string = this[key];

    if (delete this[key]) {
        Object.defineProperty(target, key, {
            get: function() {
                return propertyValue;
            },
            set: function(newValue) {
                propertyValue = newValue;
                console.log(`${key} value has changed to ${propertyValue}`);
            }
        });
    }
}

class WatchedPropertiesExample {
    @LogChanges
    name: string;
}
