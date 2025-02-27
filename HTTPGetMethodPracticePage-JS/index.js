let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendGetHTTPRequest() {
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "GET",
    };

    loadingEl.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            loadingEl.classList.add("d-none");
            let requestStatus = data.code;
            let httpResponse = JSON.stringify(data);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        });
}
sendGetRequestBtnEl.addEventListener("click", sendGetHTTPRequest);