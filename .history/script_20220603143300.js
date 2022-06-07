let randomNum = parseInt(Math.ceil() * 1000);
console.log(randomNum);
let userNum = prompt("Введите число.");

let guessfunc = () => {
  function Res() {
    if (isNaN(userNum)) {
      alert("Можно вводить только числа");
      guessNumber();
    }

    if (userNum == null) {
      alert("Игра окончена");
      return;
    }

    if (userNum == randomNum) {
      alert("Верно, Вы угадали загаданное число!");
    } else if (userNum < randomNum) {
      alert("Ваше число меньше! Осталось попыток: ");
      userNum = +prompt("Введите число");
      guessNumber();
    } else if (userNum > randomNum) {
      alert("Ваше число больше! Осталось попыток: ");
      userNum = +prompt("Введите число");
      guessNumber();
    }
  }
  return Res;
};

let guessNumber = guessfunc();

guessNumber();
