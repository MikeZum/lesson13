"use strict";

const title = getTitle(
  prompt("Как называется ваш проект?", "Название проекта")
);
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
const screenPrice = parseFloat(
  prompt("Сколько будет стоить данная работа?", "10000")
);
const service1 = prompt(
  "Какой дополнительный тип услуги нужен?",
  "Дополнительная услуга 1"
);
const servicePrice1 = parseFloat(prompt("Сколько это будет стоить?", "2000"));
const service2 = prompt(
  "Какой дополнительный тип услуги нужен?",
  "Дополнительная услуга 2"
);
const servicePrice2 = parseFloat(prompt("Сколько это будет стоить?", "3000"));
const adaptive = confirm("Нужен ли адаптив на сайте?");

let showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (15000 < price && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (0 >= price && price <= 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

let getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

function getTitle(str) {
  let low = str.trim().toLowerCase();
  let upp = low.charAt(0).toUpperCase() + low.slice(1);
  return upp;
}

let getServicePercentPrices = function () {
  return fullPrice - rollback;
};

let allServicePrices = getAllServicePrices();
let fullPrice = getFullPrice();
console.log(fullPrice, "AAAAA");
let rollback = fullPrice * (20 / 100);
let servicePercentPrice = Math.ceil(getServicePercentPrices());

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log("итоговая стоимость минус сумма отката");
