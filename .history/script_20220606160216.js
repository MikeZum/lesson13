const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
const day = document.querySelector("#day");
const date = new Date();
const todayDay = date.getDay() - 1;

for (let i = 0; i < 7; i++) {
  if (i < 5 && i != todayDay) {
    day.innerHTML += `${week[i]}<br>`;
  }
  if (i > 4) {
    day.innerHTML += `<b>${week[i]}</b><br>`;
  }

  if (i === todayDay) {
    day.innerHTML += `<i>${week[i]}</i><br>`;
  }
}
