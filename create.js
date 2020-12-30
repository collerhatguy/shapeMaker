 export function create(shape, color, size) {
    // creating div
    const newShape = document.createElement("div");
    // secondary color
    var secondaryColor = "rgb(170, 151, 57)"
    // setting size to string 
    var halfSize = size / 2;
    var twiceSize = size * 2;
    size = (size * 50).toString() + "px";
    twiceSize = (twiceSize * 50).toString() + "px";
    halfSize = (halfSize * 50).toString() + "px";

    // setting color
    newShape.style.backgroundColor = color;
    // molding the shape
    switch(shape) {
        case "Square":
            newShape.style.width = size;
            newShape.style.height = size;
            break;
        case "Rectangle":
            newShape.style.width = twiceSize;
            newShape.style.height = size;
            break;
        case "Circle":
            newShape.style.width = size;
            newShape.style.height = size;
            newShape.style.borderRadius = "50%";
            break;
        case "Oval":
            newShape.style.width = twiceSize;
            newShape.style.height = size;
            newShape.style.borderRadius = "50%";
            break;
        case "Triangle":
            newShape.style.width = 0;
            newShape.style.height = 0;
            newShape.style.borderLeft = halfSize + " solid transparent";
            newShape.style.borderRight = halfSize + " solid transparent";
            newShape.style.borderBottom = size + " solid " + color;
            newShape.style.backgroundColor = secondaryColor;
            break;
        /*
        case "Star":
            newShape.style.width = 0;
            newShape.style.height = 0;
            newShape.style.borderLeft = halfSize + " solid transparent";
            newShape.style.borderRight = halfSize + " solid transparent";
            newShape.style.borderBottom = size + " solid " + color;
            newShape.style.backgroundColor = secondaryColor;
            break;
        case "Heart":
            newShape.style.width = size;
            newShape.style.height = size;
            break;
        */
        default:  break;
    }
    return newShape;
}