let randomNum = parseInt(Math.random() * 100);
console.log(randomNum);
let userNum = prompt("Угадай число от 1 до 100");
let attempts = 1;

let guessfunc = () => {
  function Res() {
    if (userNum == null) {
      alert("До новых встреч!!!");
      return;
    }
    if (attempts === 0) {
      ("use strict");

      console.log(isNaN(parseFloat("enterNumber")));

      const hiddenNumber = function (myNumber) {
        let startGame;
        let gameOver;

        startGame = confirm("Угадай число от 1 до 100?");

        if (startGame) {
          takeNumber(myNumber);
        } else {
          gameOver = alert("Игра окончена");
        }
      };

      const takeNumber = function (unknowNum) {
        let enterNumber;

        enterNumber = prompt("Введите число от 1 до 100");

        if (enterNumber === null) {
          return alert("Игра окончена");
        }

        while (enterNumber.trim() == "" || !isFinite(enterNumber)) {
          alert("Введите число!");
          enterNumber = prompt("Введите число от 1 до 100");
        }

        enterNumber = Number(enterNumber);

        if (enterNumber < unknowNum) {
          numLessAlert();
        }

        if (enterNumber > unknowNum) {
          numMoreAlert();
        }

        if (enterNumber === unknowNum) {
          return hiddenNumber == alert("Поздравляю, Вы угадали!!!");
        }

        takeNumber(unknowNum);
      };

      const numLessAlert = function () {
        alert("Загаданное число меньше");
      };

      const numMoreAlert = function () {
        alert("Загаданное число больше");
      };

      hiddenNumber(55);
      const result = confirm("Попытки закончились, хотите сыграть еще?");
      if (result) {
        // location.reload();
        randomNum = parseInt(Math.random() * 100);
      }
    } else {
      return;
    }

    //   window.onload;
    //   location.reload();
    //   const result = confirm("Попытки закончились, хотите сыграть еще?");
    //   if (result) {
    //     function myfunc_2() {
    //       location.reload();
    //       randomNum = parseInt(Math.random() * 100);
    //     }
    // guessfunc();
    // guessNumber();
    // window.onload;
    // randomNum = parseInt(Math.random() * 100);
    //   } else {
    //     return;
    //   }

    attempts--;
    if (userNum == randomNum) {
      result = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      if (result) {
        //   location.reload();
        randomNum = parseInt(Math.random() * 100);
      } else {
        return;
      }

      if (isNaN(userNum)) {
        alert("Введи число!");
        userNum = prompt("Введите число");
        guessNumber();
      }
    } else if (userNum < randomNum) {
      alert("Загаданное число больше, осталось попыток " + attempts);
      userNum = prompt("Введите число");
      guessNumber();
    } else if (userNum > randomNum) {
      alert("Загаданное число меньше, осталось попыток " + attempts);
      userNum = prompt("Введите число");
      guessNumber();
    }
  }
  return Res;
};

let guessNumber = guessfunc();
guessNumber();
