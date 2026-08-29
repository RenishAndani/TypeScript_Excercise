import { Geometry } from "./geometry.js";

const circle = Geometry.calculateCircleArea(10);

const rectangle = Geometry.calculateRectangleArea(6, 4);

const triangle = Geometry.calculateTriangleArea(4, 5);

console.log("Area of circle: ", circle);

console.log("Area of rectangle: ", rectangle);

console.log("Area of triangel: ", triangle);
