{
    // problem - 4 ---> Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape: "circle";
        radius: number;
    };

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };

    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        } else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        throw new Error("shape not defined");
    }

    const circleShape: Circle = {
        shape: "circle",
        radius: 10,
    };

    console.log(calculateShapeArea(circleShape));

    const rectangleShape: Rectangle = {
        shape: "rectangle",
        width: 20,
        height: 15,
    };

    console.log(calculateShapeArea(rectangleShape));
}
