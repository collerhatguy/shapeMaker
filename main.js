const shapeChoice = document.getElementById("shape");
const colorChoice = document.getElementById("color");
const sizeChoice = document.getElementById("size");
const submitButton = document.getElementById("submit");

function createShape() {
    console.log(shapeChoice)
}

submitButton.addEventListener("click", createShape());