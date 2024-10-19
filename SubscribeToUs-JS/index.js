let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");
let subscribeBtnEl = document.getElementById("subscribeBtn");


nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required *";
    } else {
        nameErrMsg.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "Required *";
    } else {
        emailErrMsg.textContent = "";
    }
});

subscribeBtnEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (nameEl.value === "" && emailEl.value === "") {
        nameErrMsg.textContent = "Required *";
        emailErrMsg.textContent = "Required *";
    }
});