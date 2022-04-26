
import {Vehicle} from './vehicle.js'

class Car extends Vehicle {
    constructor(type, model, year, color, condition) {
        super(type, model, year, color, condition)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.startup = false;
        this.scheduleService = false;
    }
    loadPassenger(num) {
        let availableRoom
        if (passenger + num >= 0 && passenger + num <= maximumPassengers) {
            availableRoom = true
        } else if (passenger + num > maximumPassengers) {
            availableRoom = false
            console.log(`The ${this.year} ${this.type} can't hold ${this.passenger + num} passengers.`)
        } else {
            console.log('Please enter a number 0 and above.')
        }
    }
    start() {
        if (this.fuel > 0) {
            this.startup = true
            console.log(`The ${this.type} started.`)
        } else {
            this.startup = false
            console.log(`The ${this.type} could not start, needs more fuel.`)
        }
    }
    maintenance(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true
            console.log('Time to take it for servicing.')
        }
    }
}

const sedan = new Car("car", "Sedan", 1965, "tan", "used")
console.log(sedan)
sedan.start()
sedan.loadPassenger(0)
sedan.maintenance(31000)

//this includes the vehicle class as a module
// const VehicleModule = require("./vehicle")

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)