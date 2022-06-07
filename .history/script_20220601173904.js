"use strict";

let title = getTitle(prompt("Как называется ваш проект?", "spaceX"));
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = parseInt(+prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = parseFloat(+prompt("Сколько это будет стоить?", "3000"));

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (15000 < price && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (0 <= price && price >= 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

function getTitle(string) {
  let lowCase = string.trim().toLowerCase();
  let uppCase = lowCase.charAt(0).toUpperCase() + lowCase.slice(1);
  return uppCase;
}

function getServicePercentPrices() {
  return fullPrice - rollback;
}

const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice();
const rollback = fullPrice * (15 / 100);
const servicePercentPrice = Math.ceil(getServicePercentPrices());

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(
  "Итоговая стоимость за вычетом отката посреднику",
  servicePercentPrice
);
