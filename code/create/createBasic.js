export function createSquare(newShape, sizeString) {
    newShape.style.width = sizeString;
    newShape.style.height = sizeString;
}
export function createRectangle() {
    newShape.style.width = twiceSizeString;
    newShape.style.height = sizeString;
}
export function createCircle() {
    newShape.style.width = sizeString;
    newShape.style.height = sizeString;
    newShape.style.borderRadius = "50%";
}
export function createTriangle() {
    newShape.style.width = 0;
    newShape.style.height = 0;
    newShape.style.borderLeft = `${halfSizeString} solid transparent`;
    newShape.style.borderRight = `${halfSizeString} solid transparent`;
    newShape.style.borderBottom = `${sizeString} solid color`;
    newShape.style.backgroundColor = secondaryColor;
}
export function createOval() {
    newShape.style.width = twiceSizeString;
    newShape.style.height = sizeString;
    newShape.style.borderRadius = "50%";
}