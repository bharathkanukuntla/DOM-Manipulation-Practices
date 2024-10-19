let msg = document.getElementById("msg");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");
let storageItem = "userInput";

saveBtn.onclick = function() {
    let inputText = msg.value;
    localStorage.setItem(storageItem, inputText);
}
let displayValue = localStorage.getItem(storageItem);
msg.value = displayValue;

clearBtn.onclick = function() {
    localStorage.removeItem(storageItem);
    msg.value = "";
}