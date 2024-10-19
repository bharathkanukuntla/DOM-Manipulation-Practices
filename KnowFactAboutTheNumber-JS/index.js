let userInput = document.getElementById("userInput");
let fact = document.getElementById("fact");
let spinner = document.getElementById("spinner");


function factsOfNumber(event) {
    if (event.key === "Enter") {
        let userNum = userInput.value;
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userNum;
        fact.textContent = "";

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
                if (userNum === jsonData.fact[0]) {
                    fact.textContent = jsonData.fact;
                }
            });
    }
}



userInput.addEventListener("keydown", factsOfNumber);