let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");

themeUserInput.addEventListener("keydown", function(event) {
    let code = themeUserInput.value;
    if (event.key === "Enter" && code === "light") {
        bgContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        heading.style.color = "#014d40";
    } else if (event.key === "Enter" && code === "dark") {
        bgContainer.style.backgroundImage = "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        heading.style.color = "#ffffff";
    } else if (event.key === "Enter") {
        alert("Enter Valid Theme");
    }
});