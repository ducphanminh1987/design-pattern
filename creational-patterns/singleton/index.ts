/*
    class should always produce one instance
*/

class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const instance1: Singleton = Singleton.getInstance();

const instance2: Singleton = Singleton.getInstance();

console.assert(
  instance1 === instance2,
  "OOOPS! Singleton pattern must always produce only one instance!"
);
