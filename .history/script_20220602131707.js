"use strict";

// const po = 10;

// for (let index = 1; index < 10; index++) {
//   console.log("карт№", index, "поч");
// }

// const pp = function (ind) {
//   if (ind > 0) {
//     console.log("карт№" + ind + "поч");
//     ind--;
//     pp(ind);
//   }
// };

// pp(po);

// const foo = (...args) => {
//   console.log(args);
// };

// foo(1, 2, 3, 4);

// function countdown(i) {
//   console.log(i);
//   countdown(i - 1);
// }
// countdown(5);

// function countdown(i) {
//   console.log(i);
//   if (i <= 1) {
//     // base case
//     return;
//   } else {
//     // recursive case
//     countdown(i - 1);
//   }
// }
// countdown(100);

// let screenPrice;

// const asking = function () {
//     screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
//   while () {
//     screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
//   }
// };

// asking();

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Название проекта");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};
