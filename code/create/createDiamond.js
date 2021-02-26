export function createDiamond() {
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
}