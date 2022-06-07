let randomNum = parseInt(Math.random() * 100);
console.log(randomNum);
let userNum = prompt("Угадай число от 1 до 100");
let attempts = 2;

let guessfunc = () => {
  function Res() {
    if (userNum == null) {
      alert("До новых встреч!!!");
      return;
    }
    attempts--;

    if (attempts === 0) {
      let choose;

      choose = confirm("Попытки закончились, хотите сыграть еще?");

      if (choose) {
        location.reload();
      } else {
        location.reload();
      }

      // } else {
      //   alert("Капут");
      // userNum = prompt("Введите число");
      // guessNumber();
    }

    if (userNum == randomNum) {
      choose = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      if (choose) {
        location.reload();
      }
    } else if (isNaN(userNum)) {
      alert("Введи число!");
      userNum = prompt("Введите число");
      guessNumber();
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
