let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");

function calculate() {
    let hours = parseInt(hoursInput.value);
    let minutes = parseInt(minutesInput.value);

    if (hoursInput.value === "" && minutesInput.value === "") {
        errorMsg.textContent = "Please enter the Valid number of Hours";
        timeInSeconds.textContent = "";
        timeInSeconds.classList.add("d-none");
    } else if (hoursInput.value === "") {
        errorMsg.textContent = "Please enter the Valid number of Hours";
        timeInSeconds.textContent = "";
        timeInSeconds.classList.add("d-none");
    } else if (minutesInput.value === "") {
        errorMsg.textContent = "Please enter the Valid number of minutes";
        timeInSeconds.textContent = "";
        timeInSeconds.classList.add("d-none");
    } else {
        if (hours >= 0 && minutes >= 0) {
            let result = (hours * 3600) + (minutes * 60);
            timeInSeconds.textContent = result + "s";
            timeInSeconds.classList.add("d-block");
            errorMsg.textContent = "";
        }
    }
}

convertBtn.addEventListener("click", calculate);