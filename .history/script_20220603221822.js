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

    // if (attempts === 0) {
    //   const result = confirm("Попытки закончились, хотите сыграть еще?");
    //   if (result) {
    //     // location.reload();
    //     randomNum = parseInt(Math.random() * 100);
    //   }
    // } else {
    //   return;
    // }

    // if (attempts === 0) {
    //   let choose;

    //   choose = confirm("Попытки закончились, хотите сыграть еще?");

    //   if (choose) {
    //     window.onload;
    //     // location.reload();
    //     // randomNum = parseInt(Math.random() * 100);
    //     // attempts = 3;
    //   }
    // }

    if (userNum == randomNum) {
      alert("Поздравляю, Вы угадали!!!");
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
