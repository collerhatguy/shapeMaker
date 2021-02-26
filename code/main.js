// create variables
const shapeChoice = document.getElementById("shape");
const colorChoice = document.getElementById("color");
const sizeChoice = document.getElementById("size");
const submitButton = document.getElementById("submit");
const shapeContainer = document.getElementById("shapeContainer");
const saveButton = document.getElementById("saveButton");
const deleteAll = document.getElementById("deleteAll");
var shapes = JSON.parse(localStorage.getItem("madeShapes")) || [];
import { create } from "./create.js";
import { addDeleteButton } from "./delete.js";

console.log(shapes);
// creating all previous shapes
if (shapes.length >= 1) {
    shapes.forEach(shape => {
        const newShape = create(shape.form, shape.color, shape.size);
        shapeContainer.appendChild(newShape);
        addDeleteButton(newShape);
    });
}
submitButton.addEventListener("click", () => {
    // extracting chosen values
    const chosenShape = shapeChoice.value;
    const chosenColor = colorChoice.value;
    const chosenSize = sizeChoice.value;
    // making the shape
    const newShape = create(chosenShape, chosenColor, chosenSize);
    // adding shape to screen
    shapeContainer.appendChild(newShape);
    addDeleteButton(newShape);
    // saving shape properties to an object
    const shapeSaved = {
        form: chosenShape,
        color: chosenColor,
        size: chosenSize,
    }; 
    // adding object to an array
    shapes.push(shapeSaved);
});
saveButton.addEventListener("click", () => {
    localStorage.setItem("madeShapes", JSON.stringify(shapes));
    alert("all shapes saved to local storage")
});
deleteAll.addEventListener("click", () => {
    // clear local storage
    localStorage.clear("madeShapes")
    console.log(shapeContainer.children)
    while(shapeContainer.firstChild) {
        shapeContainer.firstChild.remove();
    }
})