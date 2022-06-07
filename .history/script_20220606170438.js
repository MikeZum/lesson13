// "use strict";

// const date = new Date();
// let week = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье",
// ];
// let str = "";
// let ital = "";
// let today = "";

// let checkFont = function (font) {
//   week.forEach(function (item, index) {
//     if (font === "str") {
//       str += item + " ";
//     } else if (font === "ital") {
//       ital += " " + `<i>${item}</i>` + " " + "<br>";
//     } else if (font === "today") {
//       if (date.getDay() == index + 1) {
//         today += " " + `<b>${item}</b>` + " " + "<br>";
//       } else {
//         today += item + "<br>";
//       }
//     }
//   });
// };

// checkFont("str");
// checkFont("ital");
// checkFont("today");

// raw.innerHTML = week;
// column.innerHTML = str;
// italic.innerHTML = ital;
// todayBold.innerHTML = today;

// let html = week.italics;

// console.log(str, "Все дни недели");
// console.log(week.join("\r\n"), "С новой строчки");
// console.log(html);
// console.log(today, "today");

let week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
  toDay = new Date().getDay() - 1;

for (let i = 0; i < week.length; i++) {
  if (i == toDay) {
    if (week[i] == "сб" || week[i] == "вс") {
      document.write(`<p><b><i>${week[i]}</i></b></p>`);
    } else {
      document.write(`<p><b>${week[i]}</b></p>`);
    }
  } else if (week[i] == "сб" || week[i] == "вс") {
    document.write(`<p><b>${week[i]}</b></p>`);
  } else {
    document.write(`<p>${week[i]}</p>`);
  }
}
console.log(week);
