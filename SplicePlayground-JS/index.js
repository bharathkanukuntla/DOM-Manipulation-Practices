let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
let spliceBtn = document.getElementById("spliceBtn");
let updatedArray = document.getElementById("updatedArray");

spliceBtn.onclick = function() {
    let startIndex = startIndexInput.value;
    let deleteCount = deleteCountInput.value;
    let itemToAdd = itemToAddInput.value;

    if (startIndex === "") {
        alert("Enter the Start Index");
        return;
    }
    if (deleteCount === "") {
        deleteCount = 0;
    } else {
        arr.splice(startIndex, deleteCount, itemToAdd);
        updatedArray.textContent = JSON.stringify(arr);
    }
}