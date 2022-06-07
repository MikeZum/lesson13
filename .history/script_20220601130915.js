"use strict";

let title = prompt("Как называется ваш проект?");
console.log(typeof title);

let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
console.log(screens);

let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
console.log(screenPrice);

let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(typeof adaptive);

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);

let servicePrice1 = +prompt("Сколько это будет стоить?", "1000");
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);

let servicePrice2 = +prompt("Сколько это будет стоить?", "1000");
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let rollback = fullPrice * (20 / 100);
console.log(rollback);

let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice <= 15000 && fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}

switch (true) {
  case fullPrice > 30000:
    console.log("Даем скидку в 10%");
    break;
  case 15000 < fullPrice && fullPrice <= 30000:
    console.log("Даем скидку в 5%");
    break;
  case 0 <= fullPrice && fullPrice >= 15000:
    console.log("Скидка не предусмотрена");
    break;
  default:
    console.log("Что то пошло не так");
    break;
}
