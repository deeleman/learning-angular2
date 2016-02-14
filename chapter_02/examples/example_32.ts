function LogChanges(target: Object, key: string) {
    var propertyValue: string = this[key];

    if (delete this[key]) {
        Object.defineProperty(target, key, {
            get: function() {
                return propertyValue;
            },
            set: function(newValue) {
                propertyValue = newValue;
                console.log(`${key} is now ${propertyValue}`);
            }
        });
    }
}

class Fruit {
    @LogChanges
    name: string;
}

var fruit = new Fruit();
fruit.name = 'banana';	   // console outputs 'name is now banana'
fruit.name = 'plantain'; // console outputs 'name is now plantain'
