let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;

function getTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    let timerContainer = document.getElementById("timer");
    clearContainer(timerContainer);
    // timer - h2
        let timer = document.createElement("h2");
        timer.id = "timer-h2";
        timer.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    //
    timerContainer.appendChild(timer);
}

function startTimer() {
    timerInterval =setInterval(() => {
        seconds += 1;
        if(seconds == 60) {
            minutes += 1;
            seconds = 0;
        }
        if(minutes == 60) {
            hours += 1;
            minutes = 0;
        }
        document.getElementById("timer-h2").innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("timer-h2").innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}