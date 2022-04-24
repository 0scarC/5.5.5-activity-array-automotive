
import {Vehicle} from './vehicle.js'

class Car extends Vehicle {
    constructor(type, model, year, color, condition) {
        super(type, model, year, color, condition)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        let availableRoom
        if (passenger + num > 0 && passenger + num <= maximumPassengers) {
            availableRoom = true
        } else if (passenger + num > maximumPassengers) {
            availableRoom = false
            console.log(`The ${this.year} ${this.type} can't hold ${this.passenger + num} passengers.`)
        } else {
            console.log('Please enter a number 0 and above.')
        }
    }
    start() {
        if (fuel > 0) {
            this.start
        }
    }
    maintenance(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true
        }
    }
}

const sedan = new Car("car", "Sedan", 1965, "tan", "used")
console.log(sedan)

//this includes the vehicle class as a module
// const VehicleModule = require("./vehicle")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)