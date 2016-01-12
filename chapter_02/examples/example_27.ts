interface Vehicle {
    make: string;
}
class Car implements Vehicle {
    // Compiler will raise a warning if this property is not declared
    make: string;
}
