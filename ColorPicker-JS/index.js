let bgTextChange = document.getElementById("selectedColorHexCode");


function greyColor() {
    let textcon = document.getElementById("button1").textContent;
    let bgChangeColor = document.getElementById("colorPickerContainer").style.backgroundColor = textcon;
    bgTextChange.textContent = textcon;
}

function greenColor() {
    let textcon = document.getElementById("button2").textContent;
    let bgChangeColor = document.getElementById("colorPickerContainer").style.backgroundColor = textcon;
    bgTextChange.textContent = textcon;
}

function blueColor() {
    let textcon = document.getElementById("button3").textContent;
    let bgChangeColor = document.getElementById("colorPickerContainer").style.backgroundColor = textcon;
    bgTextChange.textContent = textcon;
}

function purpleColor() {
    let textcon = document.getElementById("button4").textContent;
    let bgChangeColor = document.getElementById("colorPickerContainer").style.backgroundColor = textcon;
    bgTextChange.textContent = textcon;
}