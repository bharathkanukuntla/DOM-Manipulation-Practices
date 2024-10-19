let clickCounterContainer = document.getElementById("clickCounterContainer");
let counterValue = document.getElementById("counterValue");
let incrementBtn = document.getElementById("incrementBtn");

incrementBtn.onclick = function() {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
    localStorage.setItem("clickCount", counterValue.textContent);
}