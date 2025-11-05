const daysDOM = document.getElementById("days");
const hoursDOM = document.getElementById("hours");
const minutesDOM = document.getElementById("minutes");
const secondsDOM = document.getElementById("seconds");

const targetDate = new Date("December 24, 2025 00:00:00").getTime();

function timer() {
    const currentTime = new Date().getTime();

    const distance = targetDate - currentTime;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    daysDOM.innerHTML = days;
    hoursDOM.innerHTML = hours;
    minutesDOM.innerHTML = minutes;
    secondsDOM.innerHTML = seconds;
}
setInterval(timer, 1000);
