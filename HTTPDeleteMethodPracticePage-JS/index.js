let userInput = document.getElementById("userInput");
let sendDeleteRequestBtn = document.getElementById("sendDeleteRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponse = document.getElementById("httpResponse");
let loading = document.getElementById("loading");


function deletingData() {
    let userInputId = parseInt(userInput.value);
    let url = "https://gorest.co.in/public-api/users/" + userInputId;

    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer acf01f7b2edd30c8c1bc316932e90ec3a0e0c0cf226ba9c50ae4f5c5251d1c6c"
        }
    };
    loading.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loading.classList.add("d-none");
            requestStatus.textContent = jsonData.code;
            httpResponse.textContent = JSON.stringify(jsonData);

        });
}

sendDeleteRequestBtn.addEventListener("click", deletingData);


// { "name":"kanukuntlaBharath"} 7385944