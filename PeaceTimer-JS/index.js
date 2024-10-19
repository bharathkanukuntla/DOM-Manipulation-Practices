let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");

let currentTimerId = null;

function clearPreviousTimers() {
    if (currentTimerId !== null) {
        clearInterval(currentTimerId);
        currentTimerId = null;
    }
    timerText.textContent = "";
}

twentySecondsBtn.onclick = function() {
    clearPreviousTimers();
    let countValue = 20;
    timerText.textContent = countValue + " seconds left";
    currentTimerId = setInterval(function() {
        if (countValue > 0) {
            countValue -= 1;
            timerText.textContent = countValue + " seconds left";
        } else {
            clearInterval(currentTimerId);
            timerText.textContent = "Your moment is completed";
            currentTimerId = null;
        }
    }, 1000);
};

thirtySecondsBtn.onclick = function() {
    clearPreviousTimers();
    let countValue = 30;
    timerText.textContent = countValue + " seconds left";
    currentTimerId = setInterval(function() {
        if (countValue > 0) {
            countValue -= 1;
            timerText.textContent = countValue + " seconds left";
        } else {
            clearInterval(currentTimerId);
            timerText.textContent = "Your moment is completed";
            currentTimerId = null;
        }
    }, 1000);
};

fortySecondsBtn.onclick = function() {
    clearPreviousTimers();
    let countValue = 40;
    timerText.textContent = countValue + " seconds left";
    currentTimerId = setInterval(function() {
        if (countValue > 0) {
            countValue -= 1;
            timerText.textContent = countValue + " seconds left";
        } else {
            clearInterval(currentTimerId);
            timerText.textContent = "Your moment is completed";
            currentTimerId = null;
        }
    }, 1000);
};

oneMinuteBtn.onclick = function() {
    clearPreviousTimers();
    let countValue = 60;
    timerText.textContent = countValue + " seconds left";
    currentTimerId = setInterval(function() {
        if (countValue > 0) {
            countValue -= 1;
            timerText.textContent = countValue + " seconds left";
        } else {
            clearInterval(currentTimerId);
            timerText.textContent = "Your moment is completed";
            currentTimerId = null;
        }
    }, 1000);
};