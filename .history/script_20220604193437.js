"use strict";

let isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num); // Проверяем ввёл ли пользователь число?
};

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  //===========================================================================================
  start: function () {
    appData.asking();
    appData.logger();
  },
  //===========================================================================================
  asking: function () {
    appData.title = appData.getTitle(
      prompt("Как называется ваш проект?", "Калькулятор стоимости")
    );
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    )
      .toLowerCase()
      .split(", ");

    do {
      appData.screenPrice = prompt(
        "Сколько будет стоить данная работа?",
        "50000"
      );
    } while (!isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrice();
  },
  //===========================================================================================
  logger: function () {
    for (let obj in appData) {
      console.log(appData[obj]);
    }
  },
  //===========================================================================================
  getAllServicePrices: function () {
    let sum = 0;
    let addSum = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt(
          "Какой дополнительной тип услуги нужен?",
          "Форма обратной связи"
        );
      } else if (i === 1) {
        appData.service2 = prompt(
          "Какой дополнительной тип услуги нужен?",
          "Заявка"
        );
      }
      do {
        addSum = prompt("Сколько это будет стоить?");
      } while (!isNumber(addSum)); // Проверка на число

      sum += +addSum; // Записываю addSum в sum
    }
    return sum;
  },
  //===========================================================================================
  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },
  //===========================================================================================
  getRollBackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (price <= 30000 && price > 15000) {
      return "Даем скидку в 5%";
    } else if (price <= 15000 && price > 0) {
      return "Скидка не предусмотрена";
    } else price <= 0;
    {
      return "Что то пошло не так";
    }
  },
  //===========================================================================================
  getServicePercentPrice: function () {
    return appData.fullPrice - (appData.fullPrice * appData.rollback) / 100;
  },
  //===========================================================================================
  getTitle: function (name) {
    name = name.trim();
    return name[0].toUpperCase() + name.substr(1).toLowerCase();
  },
  //===========================================================================================
};
appData.start();
