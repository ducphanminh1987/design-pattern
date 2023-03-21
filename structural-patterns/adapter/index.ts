/*
    The Adapter acts as a wrapper between two objects. 
    It catches calls for one object and transforms them to format and interface recognizable by the second object.

    The Adapter pattern lets you create a middle-layer class that serves as 
    a translator between your code and a legacy class, a 3rd-party class or any other class with a weird interface.
*/

class RoundHole {
  private _radius: number;
  constructor(radius: number) {
    this._radius = radius;
  }
  fits(peg: RoundPeg): boolean {
    return this._radius >= peg.getRadius();
  }
}

class RoundPeg {
  private _radius: number;
  constructor(radius: number) {
    this._radius = radius;
  }

  getRadius(): number {
    return this._radius;
  }
}

// this SquarePeg class is a newly added provider, it is not providing radius param, this means imcompatible
class SquarePeg {
  private _width: number;
  constructor(width: number) {
    this._width = width;
  }

  getWidth(): number {
    return this._width;
  }
}

// this Adapter will try to convert a width of square to circle radius to make SquarePeg compatible with legacy RoundHole client
class SquarePegToRoundPegAdapter extends RoundPeg {
  constructor(squarePeg: SquarePeg) {
    super((squarePeg.getWidth() * Math.sqrt(2)) / 2);
  }
}

//
const hole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
console.log("existing function is still working with RoundPeg");
console.log("compatible between RoundHole and RoundPeg", hole.fits(roundPeg));

// but now, we integrates 3rd party which only provide Square, so we will need a adapter to convert square with to radius
const squarePeg = new SquarePeg(5);

// this will not work if we checking fitting between a RoundHole with a SquarePeg
// hole.fits(squarePeg);

const adapter = new SquarePegToRoundPegAdapter(squarePeg);
hole.fits(adapter);
console.log(
  "compatible between RoundHole and SquarePeg via Adapter",
  hole.fits(roundPeg)
);
