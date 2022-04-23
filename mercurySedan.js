
import {Vehicle} from './vehicle.js'

console.log(Vehicle('more', 'than', 'a', 'car', 'bro'))

class Car extends Vehicle {
    constructor(more) {
        super("car", "Sedan", 1965, "tan", "used")
    }
}

//this includes the vehicle class as a module
// const VehicleModule = require("./vehicle")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)