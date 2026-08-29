export var Geometry;
(function (Geometry) {
    function calculateRectangleArea(width, height) {
        return width * height;
    }
    Geometry.calculateRectangleArea = calculateRectangleArea;
    function calculateTriangleArea(base, height) {
        return 0.5 * height * base;
    }
    Geometry.calculateTriangleArea = calculateTriangleArea;
    function calculateCircleArea(radius) {
        return 3.14 * radius * radius;
    }
    Geometry.calculateCircleArea = calculateCircleArea;
})(Geometry || (Geometry = {}));
//# sourceMappingURL=geometry.js.map