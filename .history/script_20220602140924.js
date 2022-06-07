"use strict";

let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 20;
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
