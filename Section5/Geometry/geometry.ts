export namespace Geometry {
  export function calculateRectangleArea(width: number, height: number): number {
    return width * height;
  }

  export function calculateTriangleArea(base: number, height: number): number {
    return 0.5 * height * base;
  }

  export function calculateCircleArea(radius: number) {
    return 3.14 * radius * radius;
  }
}
