"use strict";

const title = document.getElementsByTagName("h1");
// const title2 = document.getElementsByTagName("h1")[0];
// console.log(title2);
const btn = document.getElementsByClassName("handler_btn");
const btnPlus = document.querySelector(".screen-btn");
const percent = document.querySelectorAll(".percent");
const number = document.querySelectorAll(".number");
const input = document.querySelector(
  ".rollback > .main-controls__range > input"
);
const span = document.querySelector(".rollback > .main-controls__range > span");
const totalInputs = document.getElementsByClassName("total-input");
let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  services: [],
  adaptive: true,
  allServicePrices: 0,
  fullPrice: 0,
  rollback: 0.2,
  servicePercentPrice: 0,
  start: function () {
    appData.asking();
    appData.appPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  isString: function (str, ask) {
    do {
      str = prompt(ask);
    } while (appData.isNumber(str));
    return str;
  },

  asking: function () {
    appData.title = appData.isString(
      appData.title,
      "Как называется ваш проект?"
    );

    for (let i = 0; i < 2; i++) {
      let str;
      let name = appData.isString(str, "Какие типы экранов нужно разработать?");
      let price = 0;

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price.trim() });
    }

    for (let i = 0; i < 2; i++) {
      let str;
      let name = appData.isString(
        str,
        "Какой дополнительный тип услуги нужен?"
      );
      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));

      appData.services.push({ id: i, name: name, price: +price.trim() });
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  appPrices: function () {
    appData.screenPrice = appData.screens
      .map((item) => item.price)
      .reduce((prev, curr) => prev + +curr, 0);

    for (let service of appData.services) {
      appData.allServicePrices += service.price;
    }
  },

  getRollbackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (15000 < price && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (0 <= price && price <= 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },

  getTitle: function () {
    appData.title =
      appData.title.trim()[0].toUpperCase() +
      appData.title.trim().substring(1).toLowerCase();
  },

  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * appData.rollback
    );
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.services);
  },
};

appData.start();

// console.log(title[0]);
// console.log(btn[0]);
// console.log(btn[1]);
// console.log(btnPlus);
// console.log(percent);
// console.log(number);
// console.log(input);
// console.log(span);
// console.log(totalInputs);
// console.log(screens);
