"use strict";
// Custom type guard function to check if an object is a Circle
function isCircle(shape) {
    return shape.kind === "circle";
}
// Custom type guard function to check if an object is a Square
function isSquare(shape) {
    return shape.kind === "square";
}
function printArea(shape) {
    if (isSquare(shape)) {
        return shape.sideLength * shape.sideLength;
    }
    else {
        return shape.radius * shape.radius * 3.14;
    }
}
const shape1 = { kind: "circle", radius: 5 };
const shape2 = { kind: "square", sideLength: 4 };
console.log(printArea(shape1));
console.log(printArea(shape2));
