"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemPercent = document.querySelectorAll(".percent");
const otherItemNumber = document.querySelectorAll(".number");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");

const appData = {
  title: "",
  screens: [],
  screensCount: 0,
  screenPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  rollback: 0,
  screenCounts: 0,
  priceWithRollback: 0,

  init: function () {
    appData.addTitle();
    appData.rollbackInput();
    startBtn.addEventListener("click", () => {
      appData.verification();
    });
    buttonPlus.addEventListener("click", appData.addScreenBlock);
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  verification: function () {
    screens.forEach(function (screen) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      if (select.value === "" || input.value === "") {
        alert("Введите тип и количество экранов!");
        startButton.disabled = true;
      }
    });
    appData.start();
  },

  start: function () {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    // appData.logger();
    appData.showResult();
  },

  rollbackInput: function () {
    inputRange.addEventListener("input", () => {
      inputRangeValue.textContent = inputRange.value + "%";
      appData.rollback = inputRange.value;
    });
  },

  showResult: function () {
    total.value = appData.screenPrice;
    totalCount.value = appData.screensCount;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCount.value = appData.screenCounts;
    totalCountRollback.value = appData.priceWithRollback;
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");
    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      const count = input.value;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: count,
      });
    });
  },

  addServices: function () {
    otherItemPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    appData.screenPrice = appData.screens.reduce(function (sum, item) {
      return sum + item.price;
    }, 0);

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesNumber +
      appData.servicePricesPercent;

    appData.priceWithRollback = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );

    appData.screenCounts = appData.screens.reduce(function (sum, item) {
      return sum + item.count;
    }, 0);
  },

  logger: function () {
    // console.log(appData.fullPrice);
    // console.log(appData.servicePercentPrice);
    // console.log(appData.services);
  },
};

appData.init();
