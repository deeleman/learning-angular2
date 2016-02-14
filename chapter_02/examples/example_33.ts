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

class Fruit {
    @LogChanges({
        onchange: function(newValue: string): void {
            console.log(`The fruit is ${newValue} now`);
        }
    })
    name: string;
}

var fruit = new Fruit();
fruit.name = 'banana';	   // console: 'The fruit is banana now'
fruit.name = 'plantain'; // console: 'The fruit is plantain now'
