let interval = null;

window.onload = () => {
    document.querySelector('#start').onclick = startCountdown;
    document.querySelector('#reset').onclick = reset;
    document.querySelector('#stop').onclick = stop;
};

function startCountdown() {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    if (!date || !time) {
        alert("Please enter both date and time.");
        return;
    }

    const endTime = new Date(date + " " + time);
    if (endTime <= new Date()) {
        alert("Please enter a future date and time.");
        return;
    }

    if (interval) clearInterval(interval); // clear old timer
    interval = setInterval(() => calculateTime(endTime), 1000);
}

function calculateTime(endTime) {
    const currentTime = new Date();

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    } else {
        clearInterval(interval);
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
        alert("Countdown finished!");
    }
}

function stop() {
    if (interval) {
        clearInterval(interval);
    }
}

function reset() {
    stop();
    document.querySelector('#countdown-days').innerText = 0;
    document.querySelector('#countdown-hours').innerText = 0;
    document.querySelector('#countdown-minutes').innerText = 0;
    document.querySelector('#countdown-seconds').innerText = 0;
}
