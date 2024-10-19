let numbers = [17, 31, 77, 20, 63];

let userInput = document.getElementById("userInput");
let findBtn = document.getElementById("findBtn");
let indexOfNumber = document.getElementById("indexOfNumber");

findBtn.onclick = function() {
    let inputValue = parseInt(userInput.value);
    let index = numbers.findIndex(function(eachItem) {
        if (eachItem === inputValue) {
            return true;
        } else {
            return false;
        }
    });
    indexOfNumber.textContent = index;
}