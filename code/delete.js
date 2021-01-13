export function addDeleteButton(shape) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete Shape?";
    deleteButton.addEventListener("click", () => {
        shape.remove();
        deleteButton.remove();
    })
    shape.after(deleteButton);
}