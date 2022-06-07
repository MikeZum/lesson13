"use strict";
let userGuess;
let gameNumber;

gameNumber = Math.floor(Math.random() * 100);
userGuess = prompt("Угадай число от одного до 100");

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};
const game = function () {
  switch (true) {
    case userGuess > gameNumber:
      userGuess = prompt("Загаданное число меньше");
      game();
      break;
    case userGuess < gameNumber && userGuess > 1:
      userGuess = prompt("Загаданное число больше");
      game();
      break;
    case !isNumber(userGuess) && userGuess != null:
      userGuess = prompt("Введи число!");
      game();
      break;
    case userGuess == gameNumber:
      userGuess = alert("Поздравляю, Вы угадали!!!");
      game();
      break;
    case userGuess == null:
      userGuess = alert("Игра окончена");
      break;
    default:
      game();
      break;
  }
};

game();
