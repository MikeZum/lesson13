"use strict";
let userNum;
let gameNumber;
let attempts = 10;

gameNumber = Math.floor(Math.random() * 100);
console.log(gameNumber);
userNum = prompt("Угадай число от одного до 100");

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const game = function () {
  if (isNaN(userNum)) {
    alert("Можно вводить только числа");
  }

  if (attempts === 0) {
    alert("Попытки закончились");
  }

  if (userNum === null) {
  }

  attempts--;

  if (userNum == gameNumber) {
    alert("Верно, Вы угадали загаданное число!");
  } else if (userNum < gameNumber) {
    alert("Ваше число меньше! Осталось попыток: " + attempts);
    userNum = +prompt("Введите число");
  } else if (userNum > gameNumber) {
    alert("Ваше число больше! Осталось попыток: " + attempts);
    userNum = +prompt("Введите число");
  }
  //   switch (true) {
  //     case userGuess > gameNumber:
  //       userGuess = prompt("Загаданное число меньше");
  //       game();
  //       break;
  //     case userGuess < gameNumber && userGuess > 1:
  //       userGuess = prompt("Загаданное число больше");
  //       game();
  //       break;
  //     case !isNumber(userGuess) && userGuess != null:
  //       userGuess = prompt("Введи число!");
  //       game();
  //       break;
  //     case userGuess == gameNumber:
  //       userGuess = alert("Поздравляю, Вы угадали!!!");
  //       game();
  //       break;
  //     case userGuess == null:
  //       userGuess = alert("Игра окончена");
  //       break;
  //     default:
  //       game();
  //       break;
  //   }
};

game();
