const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// Defina aqui a data futura desejada (ano, mêsIndex(0-11), dia, hora, min, seg)
// Ex: 24 April 2025 20:00 => monthIndex = 3 (abril)
const futureDate = new Date(2025, 12, 24, 20, 0, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekDay = weekdays[futureDate.getDay()];

const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
// formatar para 12h + am/pm
const period = hours >= 12 ? "pm" : "am";
const displayHour = hours % 12 || 12;
const displayMinute = minutes < 10 ? `0${minutes}` : minutes;

giveaway.textContent = `giveaway ends on ${weekDay}, ${date} ${month} ${year} ${displayHour}:${displayMinute}${period}`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // se já expirou
  if (t <= 0) {
    clearInterval(countdown); // interrompe o setInterval
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
    return;
  }

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const days = Math.floor(t / oneDay);
  const hoursLeft = Math.floor((t % oneDay) / oneHour);
  const minutesLeft = Math.floor((t % oneHour) / oneMinute);
  const secondsLeft = Math.floor((t % oneMinute) / 1000);

  const values = [days, hoursLeft, minutesLeft, secondsLeft];

  function format(item) {
    return item < 10 ? `0${item}` : item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
}

// declarar antes para poder usar dentro da função (clearInterval)
let countdown = null;
countdown = setInterval(getRemainingTime, 1000);
// chamamos uma vez pra não esperar 1s
getRemainingTime();
