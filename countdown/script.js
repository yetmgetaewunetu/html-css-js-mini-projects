const months = [
  "january",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "october",
  "November",
  "December",
];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const text = document.querySelector(".final");
const countdown = document.querySelectorAll(".countdown h4");

const dead = new Date(2025, 3, 1, 12, 30, 0);
const year = dead.getFullYear();
const month = dead.getMonth();
const days = dead.getDate();
const hour = dead.getHours();
const minutes = dead.getMinutes();
const seconds = dead.getSeconds();

text.textContent = `${months[month]} ${days}, ${year} ${hour}:${minutes}:${seconds}`;

setTime();
function setTime() {
  const today = new Date();
  const remains = dead.getTime() - today.getTime();
  const secmil = 1000;
  const minMil = 1000 * 60;
  const hrmil = 1000 * 60 * 60;
  const daymil = 1000 * 60 * 60 * 24;

  let dayspan = Math.floor(remains / daymil);
  let hourspan = Math.floor((remains % daymil) / hrmil);
  let minutespan = Math.floor((remains % hrmil) / minMil);
  let secspan = Math.floor((remains % minMil) / secmil);
  console.log(dayspan, hourspan, minutespan, secspan);
  if (dayspan < 10) {
    dayspan = "0" + dayspan;
  }

  if (hourspan < 10) {
    hourspan = "0" + hourspan;
  }
  if (minutespan < 10) {
    minutespan = "0" + minutespan;
  }
  if (secspan < 10) {
    secspan = "0" + secspan;
  }

  const time = [dayspan, hourspan, minutespan, secspan];
  for (i = 0; i < countdown.length; i++) {
    countdown[i].textContent = time[i];
  }

  if (remains <= 0) {
    dayReached();
  }
}

setInterval(setTime, 1000);
function dayReached() {
  clearInterval(setTime);
  countdown.forEach(function (e) {
    e.textContent = "00";
  });
}
