let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");
let count = 0;
let intervalId;

function makingRequest() {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    spinner.classList.remove("d-none");

    clearInterval(intervalId);
    count = 0;
    timer.textContent = count;
    result.textContent = "";
    quoteInput.value = "";

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            quoteDisplay.textContent = jsonData.content;

            intervalId = setInterval(function() {
                count += 1;
                timer.textContent = count;
            }, 1000);
        });
}

submitBtn.addEventListener("click", function() {
    if (quoteDisplay.textContent === quoteInput.value) {
        clearInterval(intervalId);
        result.textContent = "You typed in " + count + " seconds.";
    } else {
        result.textContent = "You typed incorrect sentence.";
    }
});

resetBtn.addEventListener("click", makingRequest);
makingRequest();