interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

// Custom type guard function to check if an object is a Circle
function isCircle(shape: Circle | Square): shape is Circle {
  return shape.kind === "circle";
}

// Custom type guard function to check if an object is a Square
function isSquare(shape: Circle | Square): shape is Square {
  return shape.kind === "square";
}

function printArea(shape: Circle | Square): number {
  if (isSquare(shape)) {
    return shape.sideLength * shape.sideLength;
  } else {
    return shape.radius * shape.radius * 3.14;
  }
}

const shape1: Circle = { kind: "circle", radius: 5 };
const shape2: Square = { kind: "square", sideLength: 4 };

console.log(printArea(shape1));
console.log(printArea(shape2));
