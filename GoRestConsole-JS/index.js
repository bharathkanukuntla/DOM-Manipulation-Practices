let requestUrl = document.getElementById("requestUrl");
let requestUrlErrMsg = document.getElementById("requestUrlErrMsg");
let requestMethod = document.getElementById("requestMethod");
let requestBody = document.getElementById("requestBody");
let sendRequestBtn = document.getElementById("sendRequestBtn");
let responseStatus = document.getElementById("responseStatus");
let responseBody = document.getElementById("responseBody");

requestUrl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        requestUrlErrMsg.textContent = "Required*";
    } else {
        requestUrlErrMsg.textContent = "";
    }

});

function sendingRequest() {
    let url = requestUrl.value;
    let reqMethod = requestMethod.value;

    let options = {
        method: reqMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer acf01f7b2edd30c8c1bc316932e90ec3a0e0c0cf226ba9c50ae4f5c5251d1c6c"
        },
        body: JSON.stringify(requestBody.value)
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            responseStatus.value = jsonData.code;
            responseBody.value = JSON.stringify(jsonData);
        });
}

sendRequestBtn.addEventListener("click", function(event) {
    event.preventDefault();
    sendingRequest();
});