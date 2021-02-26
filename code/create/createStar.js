export function createStar() {
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
}