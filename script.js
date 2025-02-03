const hourInp = document.getElementById("hour");
const minInp = document.getElementById("min");
const secInp = document.getElementById("sec");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
let hour = 0;
let min = 0;
let sec = 0;
let timerInterval;

function maxDigitsInInput() {
    const inp = event.target;
    if (inp.value.length > 2) {
        inp.value = inp.value.slice(0, 2);
    }
}

function timerWatch() {
    hour = parseInt(hourInp.value) || 0;
    min = parseInt(minInp.value) || 0;
    sec = parseInt(secInp.value) || 0;

    if (hour === 0 && min === 0 && sec === 0) {
        clearInterval(timerInterval);
        return;
    }

    if (sec > 0) {
        sec--;
    } else if (min > 0) {
        min--;
        sec = 59;
    } else if (hour > 0) {
        hour--;
        min = 59;
        sec = 59;
    }

    hourInp.value = hour.toString().padStart(2, 0);
    minInp.value = min.toString().padStart(2, 0);
    secInp.value = sec.toString().padStart(2, 0);
}

function stopTimer() {
    clearInterval(timerInterval);
}

startBtn.addEventListener("click", function () {
    if (startBtn.textContent == "Start" && (hour || min || sec)) {
        document.getElementById("start").className = "";
        // document.getElementById("watch-container-wrapper").classList.remove("notStarted");
        timerInterval = setInterval(timerWatch, 1000);
        startBtn.textContent = "Stop";
        document.getElementById("watch-container-wrapper").classList.remove("notStarted");
    } else if (startBtn.textContent == "Stop") {
        stopTimer();
        startBtn.textContent = "Start";
    } else {
        alert("Please Enter a time.");
    }
});

resetBtn.addEventListener("click", function () {
    hour = 0;
    min = 0;
    sec = 0;
    hourInp.value = hour.toString().padStart(2, 0);
    minInp.value = min.toString().padStart(2, 0);
    secInp.value = sec.toString().padStart(2, 0);
    document.getElementById("watch-container-wrapper").className += " notStarted";
});
