"use strict";

const date = new Date();
let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
let str = "";
let ital = "";
let today = "";

let checkFont = function (font) {
  week.forEach(function (item, index) {
    if (font === "str") {
      str += item + "<br>";
    } else if (font === "ital") {
      ital += " " + `<i>${item}</i>` + " " + "<br>";
    } else if (font === "today") {
      if (date.getDay() == index + 1) {
        today += " " + `<b>${item}</b>` + " " + "<br>";
      } else {
        today += item + "<br>";
      }
    }
  });
};

checkFont("str");
checkFont("ital");
checkFont("today");

raw.innerHTML = week;
column.innerHTML = str;
italic.innerHTML = ital;
todayBold.innerHTML = today;
