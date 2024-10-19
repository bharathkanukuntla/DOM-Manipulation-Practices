let fromUserInput = document.getElementById("fromUserInput");
let toUserInput = document.getElementById("toUserInput");
let counterText = document.getElementById("counterText");
let startBtn = document.getElementById("startBtn");

function displayNumbers() {
    let fromRange = parseInt(fromUserInput.value);
    let toRange = parseInt(toUserInput.value);

    if (fromUserInput.value === "" || toUserInput.value === "") {
        alert("Enter valid numeric input values");
        return;
    }

    let counter = fromRange;
    counterText.textContent = counter;
    let uniqueId = setInterval(function() {
        if (counter < toRange) {
            counter += 1;
            counterText.textContent = counter;
        } else {
            clearInterval(uniqueId);
        }
    }, 1000);
}

startBtn.addEventListener('click', displayNumbers);