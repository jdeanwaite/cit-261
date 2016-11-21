function Car(year, make, model, color) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.color = color;
    this.totalled = false;
}

Car.prototype.changeColor = function (color) {
    this.color = color;
};

Car.prototype.crashCar = function () {
    this.totalled = true;
};

function SportsCar(year, make, model, color, topSpeed) {
    Car.call(this, year, make, model, color);
    this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;
SportsCar.prototype.burnOut = function() {
    if (this.totalled) {
        console.log("Sorry, no can do. This car is toast.");
    }
    else
    {
        console.log("Screeching noises and stuff.");
    }
};

var car = new Car(2005, "Nissan", "Frontier", "White");
console.log("car:", car.year, car.make, car.model);

console.log("car color:", car.color);
car.changeColor("blue");
console.log("car color:", car.color);

console.log("car totalled:", car.totalled);
car.crashCar();
console.log("car totalled:", car.totalled);

var sportsCar = new SportsCar(2005, "Nissan", "GTR", "Blue");
console.log("sportsCar:", sportsCar.year, sportsCar.make, sportsCar.model);

console.log("sportsCar color:", sportsCar.color);
sportsCar.changeColor("blue");
console.log("sportsCar color:", sportsCar.color);

sportsCar.burnOut();
console.log("sportsCar totalled:", sportsCar.totalled);
sportsCar.crashCar();
console.log("sportsCar totalled:", sportsCar.totalled);
sportsCar.burnOut();