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
console.log(fullPrice);

let RollbackToIntermediary = 980;
let servicePercentPrice = fullPrice - RollbackToIntermediary;
console.log(fservicePercentPrice);
// console.log(Math.ceil(3.00001));
