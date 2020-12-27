var shapeChoice = document.getElementById("shape");
var colorChoice = document.getElementById("color");
var sizeChoice = document.getElementById("size");
var submitButton = document.getElementById("submit");

function createShape() {
    console.log(shapeChoice)
}

submitButton.addEventListener("click", createShape());

