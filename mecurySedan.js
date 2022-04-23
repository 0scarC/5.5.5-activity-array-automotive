
import * as original from './vehicle.js'

class Car extends original.Vehicle {
    constructor(sedan) {
        super("car", "Sedan", 1965, "tan", "used")
    }
}

//this includes the vehicle class as a module
// const VehicleModule = require("./vehicle")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)