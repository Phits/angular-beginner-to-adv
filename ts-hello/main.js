// Type Assertions
// enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3};
// let background = Color.Red;
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// Arrow Functions
// let log = function(message) {
//     console.log(message);
// }
// let doLog = (message) => {
//     console.log(message);
// }
// let doLogOneLine = (message) => console.log(message);
// let doLogOneLineNoPara = () => console.log();
// Interfaces
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
// Classes
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2.;
point.draw();
