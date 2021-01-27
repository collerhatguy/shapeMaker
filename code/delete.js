export function addDeleteButton(shape) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete Shape?";
    deleteButton.addEventListener("click", () => {
        // trigger delete animation here
        deleteButton.remove();
        shape.remove();
        // for letting the animation play out
        // setTimeout(() => {
        //     shape.remove()
        // }, 1000);
    })
    shape.after(deleteButton);
}