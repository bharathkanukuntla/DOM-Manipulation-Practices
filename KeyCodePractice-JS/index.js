let userInput = document.getElementById("userInput");
let keyCodeList = document.getElementById("keyCodeList");

function keyCodePractice(event) {
    let listEle = document.createElement("li");
    listEle.classList.add("key-code-list");
    listEle.textContent = event.keyCode;
    keyCodeList.appendChild(listEle);
}
userInput.addEventListener("keydown", keyCodePractice);