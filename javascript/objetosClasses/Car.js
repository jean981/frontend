//Create a class to represent a car. The attributes of the cars are brand, color and average consumption. Create a method that calculates the cost of the chosen route in euros using the miles(Km) running and gas value.

class Car {
    mark;
    color;
    avConsumption;

    constructor(mark,color,avConsumption){
        this.mark = mark;
        this.color = color;
        this.avConsumption = avConsumption;
    }

    calculateCostPerMiles(distance,gasValue){
        return  distance * this.avConsumption * gasValue; 
    }
}



const bmw = new Car('bmw','blue',1/12);
console.log(bmw);
console.log(bmw.calculateCostPerMiles(70,5));


const dacia = new Car('sandero','black',1/10);
console.log(dacia.calculateCostPerMiles(70,5));