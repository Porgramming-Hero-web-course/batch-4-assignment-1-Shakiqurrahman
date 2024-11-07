"use strict";
{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        }
        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        throw new Error("shape not defined");
    }
    const circleShape = {
        shape: "circle",
        radius: 10,
    };
    console.log(calculateShapeArea(circleShape));
    const rectangleShape = {
        shape: "rectangle",
        width: 20,
        height: 15,
    };
    console.log(calculateShapeArea(rectangleShape));
}
