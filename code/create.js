 export function create(shape, color, size) {
    // creating div
    const newShape = document.createElement("div");
    // secondary color
    var secondaryColor = "rgb(170, 151, 57)"
    // creating different ratios
    const halfSize = size / 2;
    const twiceSize = size * 2;
    const threeTenthsSize = size * 3 / 10;
    // setting size to string 
    const sizeString = `${size * 50}px`;
    const twiceSizeString = `${twiceSize * 50}px`;
    const halfSizeString = `${halfSize * 50}px`;
    const threeTenthsSizeString = `${threeTenthsSize * 50}px`;

    // secondary shape that acts as a pseudo element
    const Shape2 = document.createElement("div");

    // setting color
    newShape.style.backgroundColor = color;
    // molding the shape
    switch(shape) {
        case "Square":
            newShape.style.width = sizeString;
            newShape.style.height = sizeString;
            break;
        case "Rectangle":
            newShape.style.width = twiceSizeString;
            newShape.style.height = sizeString;
            break;
        case "Circle":
            newShape.style.width = sizeString;
            newShape.style.height = sizeString;
            newShape.style.borderRadius = "50%";
            break;
        case "Oval":
            newShape.style.width = twiceSizeString;
            newShape.style.height = sizeString;
            newShape.style.borderRadius = "50%";
            break;
        case "Triangle":
            newShape.style.width = 0;
            newShape.style.height = 0;
            newShape.style.borderLeft = `${halfSizeString} solid transparent`;
            newShape.style.borderRight = `${halfSizeString} solid transparent`;
            newShape.style.borderBottom = `${sizeString} solid color`;
            newShape.style.backgroundColor = secondaryColor;
            break;
        case "Star":
            newShape.style.width = 0;
            newShape.style.height = 0;
            newShape.style.borderLeft = `${halfSizeString} solid transparent`;
            newShape.style.borderRight = `${halfSizeString} solid transparent`;
            newShape.style.borderBottom = `${sizeString} solid color`;
            newShape.style.backgroundColor = secondaryColor;
            newShape.style.position = "relative";
            Shape2.style.width = 0;
            Shape2.style.height = 0;
            Shape2.style.borderLeft = `${halfSizeString} solid transparent`;
            Shape2.style.borderRight = `${halfSizeString} solid transparent`;
            Shape2.style.borderTop = `${sizeString} solid color`;
            Shape2.style.backgroundColor = "transparent";
            Shape2.style.position = "absolute";
            Shape2.style.left = `-${halfSizeString}`;
            Shape2.style.top = threeTenthsSizeString;
            newShape.append(Shape2);
            break;
        case "Diamond":
            newShape.style.width = 0;
            newShape.style.height = 0;
            newShape.style.border = `${halfSizeString} solid transparent`;
            newShape.style.borderBottomColor = color;
            newShape.style.backgroundColor = "transparent";
            newShape.style.position = "relative";
            newShape.style.top = `-${halfSizeString}`;
            Shape2.style.width = 0;
            Shape2.style.height = 0;
            Shape2.style.border = `${halfSizeString} solid transparent`;
            Shape2.style.borderTopColor = color;
            Shape2.style.backgroundColor = "transparent";
            Shape2.style.position = "absolute";
            Shape2.style.left = `-${halfSizeString}`;
            Shape2.style.top = halfSizeString;
            newShape.append(Shape2);
            break;
        // case "Pentagon":
        //     newShape.style.width = sizeString;
        //     newShape.style.height = 0;
        //     newShape.style.boxSizing = "content-box";
        //     newShape.style.borderWidth = size + halfSize + "0";
        //     newShape.style.borderStyle = "solid";
        //     newShape.style.borderColor = color + " transparent";
        //     newShape.style.backgroundColor = secondaryColor;
        //     newShape.style.position = "relative";
        //     const Shape2 = document.createElement("div");
        //     Shape2.style.width = 0;
        //     Shape2.style.height = 0;
        //     Shape2.style.borderLeft = halfSize + " solid transparent";
        //     Shape2.style.borderRight = halfSize + " solid transparent";
        //     Shape2.style.borderTop = size + " solid " + color;
        //     Shape2.style.backgroundColor = "transparent";
        //     Shape2.style.position = "absolute";
        //     Shape2.style.left = "-" + halfSize;
        //     Shape2.style.top = "-" + twiceSize;
        //     Shape2.style.borderWidth = "0 " + size + threeTenthsSize;
        //     Shape2.style.borderStyle = "solid";
        //     Shape2.style.borderColor = "transparent transparent " + color;
        //     newShape.append(Shape2);
        //     break;
        // case "Heart":
        //     newShape.style.width = size;
        //     newShape.style.height = size;
        //     break;
        default:  break;
    }
    return newShape;
}