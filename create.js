 export function create(shape, color, size) {
    // creating div
    const newShape = document.createElement("div");
    // setting width and height
    newShape.style.width = (size * 50).toString() + "px";
    newShape.style.height = (size * 50).toString() + "px";
    // molding the shape
    switch(shape) {
        case "square":
            break;
        case "circle":
            newShape.style.borderRadius = "50%";
            break;
        case "triangle":
            break;
        default:  break;
    }
    // setting color
    newShape.style.backgroundColor = color;
    return newShape;
}