let userNum = prompt("Введите число.");
let randomNum = parseInt(Math.random() * 1000);

let guessfunc = () => {
  function Res() {
    if (isNaN(userNum)) {
      alert("Можно вводить только числа");
      guessNumber();
    }

    if (userNum === null) {
      alert("Игра окончена");
      return;
    }

    if (userNum == this.randomNum) {
      alert("Верно, Вы угадали загаданное число!");
    } else if (userNum < this.randomNum) {
      alert("Ваше число меньше! Осталось попыток: ");
      userNum = +prompt("Введите число");
      guessNumber();
    } else if (userNum > this.randomNum) {
      alert("Ваше число больше! Осталось попыток: ");
      userNum = +prompt("Введите число");
      //   guessNumber();
    }
  }
  return Res;
};

let guessNumber = guessfunc();

guessNumber();
