let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

let url = "https://apis.ccbp.in/jokes/random";

function randomJoke() {
    let options = {
        method: "GET"
    };
    spinner.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            jokeText.textContent = jsonData.value;
        });
}

jokeBtn.addEventListener("click", randomJoke);