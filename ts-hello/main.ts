//*** Type Assertions ***//
// enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3};
// let background = Color.Red;

// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
 
//***  Arrow Functions ***//
// let log = function(message) {
//     console.log(message);
// }

// let doLog = (message) => {
//     console.log(message);
// }

// let doLogOneLine = (message) => console.log(message);

// let doLogOneLineNoPara = () => console.log();

//***  Interfaces ***//
// interface Point {
//     x: number,
//     y: number,
//     draw: () => void
// }

// let drawPoint = (point: Point) => {
//     // ...
// }

// let getDistance = (pointA: Point, pointB: Point) => {
//     // ..
// }

// drawPoint({
//     x: 1,
//     y: 2
// })

//***  Classes ***//
// class Point {
//     x: number;
//     y: number;

//     draw() {
//         console.log('X: ' + this.x + ' Y: ' + this.y);
//     }

//     getDistance(another: Point) {
//         // ...
//     }
// }

// let point = new Point();
// point.x = 1;
// point.y = 2.
// point.draw();

//***  Constructors ***//
// class Point {
//     x: number;
//     y: number;

//     constructor(x?: number, y?: number) {
//        this.x = x;
//        this.y = y;
//     }

//     draw() {
//         console.log('X: ' + this.x + ' Y: ' + this.y);
//     }
// }

// let point = new Point(1, 2);
// point.draw();

//*** Access Modifiers ***//
// class Point {
//     private x: number;
//     private y: number;

//     constructor(x?: number, y?: number) {
//        this.x = x;
//        this.y = y;
//     }

//     draw() {
//         console.log('X: ' + this.x + ' Y: ' + this.y);
//     }
// }

// let point = new Point(1, 2);
// point.draw();

//*** Access Modifiers in Construtor Parameters ***//
// class Point {

//     constructor(private x?: number, private y?: number) {
//     }

//     draw() {
//         console.log('X: ' + this.x + ' Y: ' + this.y);
//     }
// }

// let point = new Point(1, 2);
// point.draw();

//*** Properties ***//
// class PointProp {

//     constructor(private _x?: number, private _y?: number) {
//     }

//     draw() {
//         console.log('X: ' + this._x + ' Y: ' + this._y);
//     }

//     get x() {
//         return this.x;
//     }

//     set x(value) {
//         if (value < 0) {
//             throw new Error('Value can not be less than 0');
//         } else {
//             this.x = value;
//         }
//     }
// }

// let pointObject = new PointProp(1, 2);
// let x = point.x;
// pointObject.x = 10;
// pointObject.draw();

//*** Modules ***//
// class PointMod {

//     constructor(private _x?: number, private _y?: number) {
//     }

//     draw() {
//         console.log('X: ' + this._x + ' Y: ' + this._y);
//     }
// }

import { PointMod }from './point-mod';

let pointMod = new PointMod(1, 2);
pointMod.draw();






















