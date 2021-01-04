// create variables
const shapeChoice = document.getElementById("shape");
const colorChoice = document.getElementById("color");
const sizeChoice = document.getElementById("size");
const submitButton = document.getElementById("submit");
const shapeContainer = document.getElementById("shapeContainer");
var shapes = JSON.parse(localStorage.getItem("madeShapes")) || [];
import { create } from "./create.js";

console.log(shapes);
// creating all previous shapes
if (shapes.lenth >= 1) {
    shapes.forEach(shape => {
        const newShape = create(shape.form, shape.color, shape.size);
        shapeContainer.appendChild(newShape);
    });
}
submitButton.addEventListener("click", function() {
    const chosenShape = shapeChoice.value;
    const chosenColor = colorChoice.value;
    const chosenSize = sizeChoice.value;
    const newShape = create(chosenShape, chosenColor, chosenSize);
    shapeContainer.appendChild(newShape);
    const shapeSaved = {
        form: chosenShape,
        color: chosenColor,
        size: chosenSize,
    };
    shapes.push(shapeSaved);
    console.log(shapes);
    localStorage.setItem("madeShapes", JSON.stringify(shapes));
});