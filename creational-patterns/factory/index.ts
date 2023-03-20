/*
The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls to a special factory method. 
Don’t worry: the objects are still created via the new operator, but it’s being called from within the factory method. 
Objects returned by a factory method are often referred to as products.
*/

interface Transporter {
  deliver(): string;
}

class Truck implements Transporter {
  deliver(): string {
    return "A Truck delivers by road";
  }
}

class Ship implements Transporter {
  deliver(): string {
    return "A Ship delivers by sea";
  }
}

abstract class Logistics {
  protected abstract createTransporter(): Transporter;
  public deliver(): string {
    const transporter = this.createTransporter();
    return transporter.deliver();
  }
}

class RoadLogistics extends Logistics {
  createTransporter(): Transporter {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransporter(): Transporter {
    return new Ship();
  }
}

let seaLogistics: Logistics = new SeaLogistics();
console.log(seaLogistics.deliver());

let roadLogistics: Logistics = new RoadLogistics();
console.log(roadLogistics.deliver());
