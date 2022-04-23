export class Vehicle {
    constructor(type, model, year, color, condition) {
        this.type = type;
        this.model = model;
        this.year = year;
        this.color = color;
        this.condition = condition;
    }
    location() {
        switch(this.type) {
            case 'car':
                console.log(`This needs to go the Miami, FL.`)
                break
            case 'truck':
                console.log(`This needs to go to Charlotte, NC.`)
                break
            case 'SUV':
                console.log(`This needs to go to Chicago, IL.`)
                break
        }
    }
    inspect() {
        console.log(`I want to inspect the ${this.year} ${this.model}.`)
    }
    paint(newColor) {
        console.log(`Let's change the paint from ${this.color} to ${newColor}`)
    }
    price() {
        if (this.condition === 'new') {
            console.log(`Not on sale`)
        } else if (this.condition === 'used') {
            console.log(`Reduced price`)
        }
    }
}

const olds = new Vehicle("car", "Oldsmobile", 2007, "maroon", "used")
console.log(olds)
olds.location()
olds.inspect()
olds.paint("navy blue")
olds.price()

//This exports things you want to use from this "module", more info in readme
// module.exports = {
//     Vehicle
// }
