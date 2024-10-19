let requestBody = document.getElementById("requestBody");
let sendPostRequestBtn = document.getElementById("sendPostRequestBtn");
let requestStatus = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loading = document.getElementById("loading");

function postingRequest() {
    let inputBody = requestBody.value;
    let url = "https://gorest.co.in/public-api/users";

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer acf01f7b2edd30c8c1bc316932e90ec3a0e0c0cf226ba9c50ae4f5c5251d1c6c"
        },
        body: inputBody
    };

    loading.classList.remove("d-done");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {

            loading.classList.add("d-done");
            requestStatus.textContent = jsonData.code;
            httpResponseEl.textContent = JSON.stringify(jsonData);
        });

}


sendPostRequestBtn.addEventListener("click", postingRequest);