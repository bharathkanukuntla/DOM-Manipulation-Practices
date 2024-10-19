let imageElement = document.getElementById("image");
let warningMessage = document.getElementById("warningMessage");
let defaultImageWidth = 200;
imageElement.style.width = defaultImageWidth + "px";
let imageWidth = document.getElementById("imageWidth");
let idText = document.getElementById("idText");

function incrementButton() {
    warningMessage.textContent = "";
    if (defaultImageWidth >= 300) {
        warningMessage.textContent = "Too Big. Decrease the Size of the Image";
    } else {
        defaultImageWidth = defaultImageWidth + 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidth.textContent = defaultImageWidth + "px";
        idText.textContent = defaultImageWidth + "px";
    }
}

function decrementButton() {
    warningMessage.textContent = "";
    if (defaultImageWidth <= 100) {
        warningMessage.textContent = "Can't visible. Increase the Size of the Image";
    } else {
        defaultImageWidth = defaultImageWidth - 5;
        imageElement.style.width = defaultImageWidth + "px";
        imageWidth.textContent = defaultImageWidth + "px";
        idText.textContent = defaultImageWidth + "px";
    }
}