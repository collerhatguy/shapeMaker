// create variables
const shapeChoice = document.getElementById("shape");
const colorChoice = document.getElementById("color");
const sizeChoice = document.getElementById("size");
const submitButton = document.getElementById("submit");
const shapeContainer = document.getElementById("shapeContainer");
import { create } from "./create.js";


submitButton.addEventListener("click", function() {
    const chosenShape = shapeChoice.value;
    const chosenColor = colorChoice.value;
    const chosenSize = sizeChoice.value;
    const newShape = create(chosenShape, chosenColor, chosenSize);
    shapeContainer.appendChild(newShape);
});