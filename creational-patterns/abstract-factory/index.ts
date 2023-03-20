/*
    Abstract Factory defines an interface for creating all distinct products but leaves the actual product creation to concrete factory classes. 
    Each factory type corresponds to a certain product variety.

    The client code calls the creation methods of a factory object instead of creating products directly with a constructor call (new operator). 
    Since a factory corresponds to a single product variant, all its products will be compatible.

    Client code works with factories and products only through their abstract interfaces. 
    This lets the client code work with any product variants, created by the factory object. 
    You just create a new concrete factory class and pass it to the client code.
*/

interface Chair {
  sayInfo(): void;
}

class ModernChair implements Chair {
  sayInfo(): void {
    console.log("I am a modern chair!");
  }
}

class VictorianChair implements Chair {
  sayInfo(): void {
    console.log("I am a Victorian chair!");
  }
}

class ArtDecoChair implements Chair {
  sayInfo(): void {
    console.log("I am a ArtDeco chair!");
  }
}

interface Table {
  sayInfo(): void;
}

class ModernTable implements Table {
  sayInfo(): void {
    console.log("I am a modern Table!");
  }
}

class VictorianTable implements Table {
  sayInfo(): void {
    console.log("I am a Victorian Table!");
  }
}

class ArtDecoTable implements Table {
  sayInfo(): void {
    console.log("I am a ArtDeco Table!");
  }
}

interface Sofa {
  sayInfo(): void;
}

class ModernSofa implements Sofa {
  sayInfo(): void {
    console.log("I am a modern Sofa!");
  }
}

class VictorianSofa implements Sofa {
  sayInfo(): void {
    console.log("I am a Victorian Sofa!");
  }
}

class ArtDecoSofa implements Sofa {
  sayInfo(): void {
    console.log("I am a ArtDeco Sofa!");
  }
}

interface FurnitureFactory {
  createChair(): Chair;
  createTable(): Table;
  createSofa(): Sofa;
}

class ModernFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }
  createTable(): Table {
    return new ModernTable();
  }
  createSofa(): Sofa {
    return new ModernSofa();
  }
}

class VictorianFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }
  createTable(): Table {
    return new VictorianTable();
  }
  createSofa(): Sofa {
    return new VictorianSofa();
  }
}

class ArtDecoFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ArtDecoChair();
  }
  createTable(): Table {
    return new ArtDecoTable();
  }
  createSofa(): Sofa {
    return new ArtDecoSofa();
  }
}

class FurnitureClient {
  private _furnitureFactory: FurnitureFactory;

  constructor(furnitureFatory: FurnitureFactory) {
    this._furnitureFactory = furnitureFatory;
  }

  showProducts(): void {
    console.log("--------------------------------------------------");
    let table: Table = this._furnitureFactory.createTable();
    table.sayInfo();
    let chair: Chair = this._furnitureFactory.createChair();
    chair.sayInfo();
    let sofa: Sofa = this._furnitureFactory.createSofa();
    sofa.sayInfo();
    console.log("--------------------------------------------------");
  }
}

const modernFactory = new ModernFactory();
let client = new FurnitureClient(modernFactory);
client.showProducts();

const victorianFactory = new VictorianFactory();
client = new FurnitureClient(victorianFactory);
client.showProducts();

const artDecoFactory = new ArtDecoFactory();
client = new FurnitureClient(artDecoFactory);
client.showProducts();
