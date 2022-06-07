"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let service1;
let service2;

let rollback;
let allServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "spaceX");
  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные"
  );

  do {
    screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

let showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (15000 < price && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (0 <= price && price <= 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

const getAllServicePrices = function () {
  let sum = 0;
  let num1, num2;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt(
        "Какой дополнительный тип услуги нужен?",
        "Дополнительная услуга 1"
      );

      do {
        num1 = prompt("Сколько это будет стоить?");
      } while (!isNumber(num1));
    } else if (i === 1) {
      service2 = prompt(
        "Какой дополнительный тип услуги нужен?",
        "Дополнительная услуга 2"
      );

      do {
        num2 = prompt("Сколько это будет стоить?");
      } while (!isNumber(num2));
    }
  }
  sum = +num1.trim() + +num2.trim();
  return sum;
};

function getFullPrice(screenPrice, allServicePrices) {
  return screenPrice + allServicePrices;
}

function getTitle(str) {
  let low = str.trim().toLowerCase();
  let upp = low.charAt(0).toUpperCase() + low.slice(1);
  return upp;
}

let getServicePercentPrices = function (fullPrice, rollback) {
  return fullPrice - rollback;
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(+screenPrice.trim(), allServicePrices);
rollback = fullPrice * (20 / 100);
title = getTitle(title);
servicePercentPrice = Math.ceil(getServicePercentPrices(fullPrice, rollback));

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice, "итоговая стоимость минус сумма отката");
