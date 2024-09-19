// @ts-check
//defining class vehicle
class Vehicle {
  make: string;
  model: string;
  status: "started" | "stopped"; //current status of the vehicle
  wheels: number;

  constructor(make: string, model: string, status: "started" | "stopped" , wheels: number){
    this.make = make;
    this.model = model;
    this.status = status;
    this.wheels = wheels;
  }

  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}
//defining a car which extends vehicle with 4 wheels
class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, "stopped", 4); //calling the vehicle constructor with stopped status and 4 wheels
  }
}
//defining a motorcycle which extends vehicle with 2 wheels
class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, "stopped", 2);//calling the vehicle constructor with stopped status and 2 wheels
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}
//creating a new motorcycle instance
const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

//creating a new car instance
const myBuick = new Car("Buick", "Regal");
myBuick.wheels = myBuick.wheels - 1;
console.log(myBuick.wheels);
console.log(myBuick.model);

//defining a generic class for NCycles
class NCycle<T> {
  status: "stopped" | "started" = "stopped";
  make: T;
  model: T;
  wheels: number;

  constructor(make: T, model: T, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }



  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }

  print(index: number = 0): void {
    // if this.make and this.model are both arrays
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      // if parameter index exist in this,ake and this.model
      if (this.make[index] && this.model[index]) {
        console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}`);
      }
    } else {
      console.log(`This is a ${this.make} ${this.model} NCycle`);
    }
  }

  printAll(): void {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      // if parameter index exist in this,ake and this.model
      
      for (let i = 0; i < Math.min(this.make.length, this.model.length); i ++){
        console.log(`This NCycle has a ${this.make[i]} ${this.model[i]}`);
      }
    }
  }

}

//creating a new ncycle instance with array values
const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];

const testCycle4 = new NCycle<string[]>(makes4, models4, 4);

testCycle4.print(2);
testCycle4.printAll();