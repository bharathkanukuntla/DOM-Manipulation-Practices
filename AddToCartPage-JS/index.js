let unContainer = document.getElementById("unContainer");
let cartItemTextInput = document.getElementById("cartItemTextInput");
let addBtn = document.getElementById("addBtn");

function addButton() {
    let itemInput = cartItemTextInput.value;

    let newItem = document.createElement("li");
    newItem.classList.add("unClass");
    newItem.textContent = itemInput;
    unContainer.appendChild(newItem);

}