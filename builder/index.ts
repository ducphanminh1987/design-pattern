/*
  Builder is a creational design pattern that lets you construct complex objects step by step. 
  The pattern allows you to produce different types and representations of an object using the same construction code.
*/

class Car {
  public parts: string[];

  constructor() {
    this.parts = [];
  }

  public listParts(): string[] {
    return this.parts;
  }
}

interface Builder {
  reset(): void;
  setSeats(numberOfSeats: number): void;
  setFuel(fuel: string): void;
  hasGPS(): void;
}

class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }

  setSeats(numberOfSeats: number): void {
    this.car.parts.push(`- has ${numberOfSeats} seats`);
  }

  setFuel(fuel: string): void {
    this.car.parts.push(`- uses ${fuel}`);
  }

  hasGPS(): void {
    this.car.parts.push(`- has GPS system`);
  }

  getCar(): Car {
    const result = this.car;
    // this.reset();
    return result;
  }
}

class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  // this should be called when builder new product
  resetBuilder() {
    this.builder.reset();
  }

  createBasicCar(): void {
    this.builder.setSeats(4);
    this.builder.setFuel("Oil");
  }

  createModernCar(): void {
    this.builder.setSeats(4);
    this.builder.setFuel("Gas");
    this.builder.hasGPS();
  }
}

const carBuilder = new CarBuilder();

const carDirector = new Director(carBuilder);

console.log("------------------------------------------------");
carDirector.createBasicCar();
console.log("basic car: ");
carBuilder
  .getCar()
  .listParts()
  .forEach((part) => console.log(part));

console.log("------------------------------------------------");

// reset car builder
carDirector.resetBuilder();

console.log("");
console.log("");

console.log("------------------------------------------------");
carDirector.createModernCar();
console.log("modern car: ");
carBuilder
  .getCar()
  .listParts()
  .forEach((part) => console.log(part));
console.log("------------------------------------------------");
