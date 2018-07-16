//*** Modules ***//
export class PointMod {

    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    }
}

let pointMod = new PointMod(1, 2);
pointMod.draw();