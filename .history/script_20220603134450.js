let randomNum = parseInt(Math.random() * 100);
console.log(randomNum);
let userNum = prompt("Угадай число от 1 до 100");
let attempts = 3;

let guessfunc = () => {
  function Res() {
    if (userNum == null) {
      alert("Игра окончена");
      return;
    }

    if (isNaN(userNum)) {
      alert("Можно вводить только числа");
      userNum = +prompt("Введите число");
      guessNumber();
    }

    if (attempts === 0) {
      alert("Попытки закончились");
    }

    if (userNum < randomNum) {
      alert("Ваше число меньше! Осталось попыток: " + attempts);
      userNum = +prompt("Введите число");
      guessNumber();
    }
    if (userNum > randomNum) {
      alert("Ваше число больше! Осталось попыток: " + attempts);
      userNum = +prompt("Введите число");
      guessNumber();
    }
    if (userNum == randomNum) {
      alert("Верно, Вы угадали загаданное число!");
      return;
    }
  }
  return Res;
};

let guessNumber = guessfunc();

guessNumber();
