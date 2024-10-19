let cityHyderabad = document.getElementById("cityHyderabad");
let cityChennai = document.getElementById("cityChennai");
let cityDelhi = document.getElementById("cityDelhi");
let cityMumbai = document.getElementById("cityMumbai");
let submitBtn = document.getElementById("submitBtn");
let resultMsg = document.getElementById("resultMsg");


let resultInput = null;

cityHyderabad.addEventListener("change", function(event) {
    resultInput = event.target.value;
    console.log(resultInput);
});
cityChennai.addEventListener("change", function(event) {
    resultInput = event.target.value;
    console.log(resultInput);
});
cityDelhi.addEventListener("change", function(event) {
    resultInput = event.target.value;
    console.log(resultInput);
});
cityMumbai.addEventListener("change", function(event) {
    resultInput = event.target.value;
    console.log(resultInput);
});

function resultMethod() {

    if (resultInput === null) {
        resultMsg.textContent = "Please select the answer!";
        resultMsg.style.color = "red";
    } else if (resultInput === "Delhi") {
        resultMsg.textContent = "Correct Answer!";
        resultMsg.style.color = "green";
    } else {
        resultMsg.textContent = "Wrong Answer!";
        resultMsg.style.color = "red";
    }
}

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    resultMethod();
});