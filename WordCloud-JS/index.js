let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn")



function words(ele) {
    let randomNumber = Math.ceil(Math.random() * 30);
    let spanEle = document.createElement("span");
    spanEle.id = "spanId";
    spanEle.textContent = ele;
    spanEle.style.fontSize = randomNumber + "px";
    wordsContainer.appendChild(spanEle);
}

for (let ele of wordCloud) {
    words(ele);
}
addBtn.onclick = function() {
    let inputVal = userInput.value;
    if (inputVal === "") {
        errorMsg.textContent = "Enter a Word";
    } else {
        words(inputVal);
        userInput.value = "";
    }
}