"use strict";

const hiddenNumber = function (myNumber, min, max) {
  let startGame;
  let gameOver;
  let attempts = 10;

  startGame = confirm("Угадай число от 1 до 100?");

  if (startGame) {
    takeNumber(myNumber, attempts);
  } else {
    gameOver = alert("Игра окончена");
  }
};

const takeNumber = function (unknowNum, attempts) {
  let enterNumber;

  console.log(attempts);

  enterNumber = prompt("Введите число от 1 до 100");

  if (enterNumber === null) {
    return alert("Игра окончена");
  }

  while (enterNumber.trim() == "" || !isFinite(enterNumber)) {
    alert("Введи число!");
    enterNumber = prompt("Введите число от 1 до 100");
  }

  enterNumber = Number(enterNumber);

  attempts--;

  if (enterNumber < unknowNum) {
    numLessAlert(attempts);
  }

  if (enterNumber > unknowNum) {
    numMoreAlert(attempts);
  }

  if (enterNumber === unknowNum) {
    return alert("Поздравляю, Вы угадали!!!");
  }

  if (attempts === 0) {
    let choose;

    choose = confirm("Попытки закончились, хотите сыграть еще?");

    if (choose) {
      attempts = 10;
    }
  }

  takeNumber(unknowNum, attempts);
};

const numLessAlert = function (attempt) {
  alert("Загаданное число меньше, осталось " + attempt + " попыток");
};

const numMoreAlert = function (attempt) {
  alert("Загаданное число больше, осталось " + attempt + " попыток");
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

hiddenNumber(getRandomInt(1, 100)) > 10;
