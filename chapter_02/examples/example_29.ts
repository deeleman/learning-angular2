class Sedan extends Car {
    model: string;
    constructor(make: string, model: string) {
        super(make);
        this.model = model;
    }
}
