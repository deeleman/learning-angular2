class Car {
  private distanceRun: number = 0;
  color: string;

  constructor(public isHybrid: boolean, color: string = 'red') {
    this.color = color;
  }

  getGasConsumption(): string {
    return this.isHybrid ? 'Very low' : 'Too high!';
  }

  drive(distance: number): void {
    this.distanceRun += distance;
  }

  static honk(): string {
    return 'HOOONK!';
  }

  get distance(): number {
    return this.distanceRun;
  }
}

var myCar = new Car(false);   // A new object of type Car is instantiated

console.log(myCar.color);     // 'red'
console.log(myCar.distance);  // 0 (public accessor returns distanceRun)

myCar.drive(15);
console.log(myCar.distance);  // 15 (0 + 15)
myCar.drive(21);
console.log(myCar.distance);  // 36 (15 + 21)

myCar.getGasConsumption();    // 'Too high!' (my car is not hybrid)

Car.honk();                   // 'HOOONK!' (no object instance required)

// NOTE: The following statements will throw errors upon compilation
console.log(myCar.distanceRun);     // Property 'distanceRun' is private and only accessible within class 'Car'.
myCar.distance = 100;               // Accessors are only available when targeting ECMAScript 5 and higher.
