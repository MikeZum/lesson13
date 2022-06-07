"use strict";

// a = 10;
// console.log(a);

// let answer = confirm("Тебе есть 15?");
// console.log(answer);

// let answer2 = prompt("Сколько тебе лет?", "18 age");
// console.log(answer2);

// let title = prompt("Как называется ваш проект?");
// console.log(title);

// let screens = prompt(
//   "Какие типы экранов нужно разработать?",
//   "Простые, Сложные, Интерактивные"
// );
// console.log(screens);

// let adaptive = prompt("Нужен ли адаптив на сайте?");
// if (true) {
//   console.log("Да");
// } else {
//   console.log("Нет");
// }

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);

let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);

let servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);

let screenPrice = 1000;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice + " fullPrice");

let RollbackToIntermediary = Math.ceil(999);
let servicePercentPrice = fullPrice - RollbackToIntermediary;
// console.log(Math.ceil(servicePercentPrice));
// console.log(Math.ceil(3.00001));

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}

switch (fullPrice) {
  case 1:
    console.log("1");
    break;
  case 3000:
    console.log(
      "Реальная цена, если servicePrice1 = 1000 и servicePrice2 = 1000"
    );
    break;
  case 0:
  case 15000:
  case 30000:
    console.log("все варианты");
    break;
  default:
    break;
}
