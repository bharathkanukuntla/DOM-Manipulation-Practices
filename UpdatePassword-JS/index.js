let passwordEl = document.getElementById("newPassword");
let conPasswordEl = document.getElementById("confirmPassword");
let passErrMsg = document.getElementById("newPasswordErrMsg");
let conPassErrMsg = document.getElementById("confirmPasswordErrMsg");
let updatePasswordForm = document.getElementById("updatePasswordForm");

// Validate new password field
function validateNewPassword() {
    if (passwordEl.value === "") {
        passErrMsg.textContent = "Required *";
    } else {
        passErrMsg.textContent = "";
    }
}

// Validate confirm password field
function validateConPassword() {
    if (conPasswordEl.value === "") {
        conPassErrMsg.textContent = "Required *";
    } else if (conPasswordEl.value !== passwordEl.value) {
        conPassErrMsg.textContent = "Passwords must be same";
    } else {
        conPassErrMsg.textContent = "";
    }
}

passwordEl.addEventListener("blur", validateNewPassword);
conPasswordEl.addEventListener("blur", validateConPassword);

updatePasswordForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConPassword();
});