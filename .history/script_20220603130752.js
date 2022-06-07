let randomNum = parseInt(Math.random() * 100);
console.log(randomNum);
let userNum = prompt("Угадай число от 1 до 100");

let guessfunc = () => {
  function Res() {
    if (userNum == null) {
      alert("Игра окончена");
      return;
    }

    if (isNaN(userNum)) {
      alert("Можно вводить только числа");
      guessNumber();
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
      //   guessNumber();
    }
  }
  return Res;
};

let guessNumber = guessfunc();

guessNumber();
