"use strict";

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: true,
  services: {},
  allServicePrices: 0,
  fullPrice: 0,
  rollback: 10,
  servicePercentPrice: 0,

  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  start: function () {
    appData.asking();
    appData.getAllServicePrices();
    appData.getFullPrice();
    // appData.rollback = appData.fullPrice * (20 / 100);
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.logger();
  },

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "spaceX");
    // appData.screens = prompt(
    //   "Какие типы экранов нужно разработать?",
    //   "Простые, Сложные, Интерактивные"
    // );

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какие типы экранов нужно разработать?");
      let price = 0;

      do {
        price = prompt("Сколько будет стоить данная работа?");
      } while (!appData.isNumber(price));
      appData.screens.push({ id: i, name: name, price: price });
    }

    for (screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let i = 0; i < 2; i++) {
      let name = prompt("Какой дополнительный тип услуги нужен?");
      let price = 0;

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));

      appData.services[name] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  getRollbackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (15000 < price && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (0 <= price && price <= 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что то пошло не так";
    }
  },

  getAllServicePrices: function () {
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
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
    appData.servicePercentPrice =
      appData.fullPrice - (appData.fullPrice * appData.rollback) / 100;
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.screens);

    // for (let key in appData) {
    //   console.log(key);
    // }
  },
};

appData.start();
