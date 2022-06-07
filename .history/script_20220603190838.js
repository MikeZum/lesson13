let randomNum = parseInt(Math.random() * 100);
console.log(randomNum);
let userNum = prompt("Угадай число от 1 до 100");

let guessfunc = () => {
  function Res() {
    if (userNum == null) {
      alert("Игра окончена");
      return;
    }

    if (userNum == randomNum) {
      alert("Поздравляю, Вы угадали!!!");
    } else if (isNaN(userNum)) {
      alert("Введи число!");
      userNum = prompt("Введите число");
      guessNumber();
    } else if (userNum < randomNum) {
      alert("Загаданное число больше");
      userNum = prompt("Введите число");
      guessNumber();
    } else if (userNum > randomNum) {
      alert("Загаданное число меньше");
      userNum = prompt("Введите число");
      guessNumber();
    }
  }
  return Res;
};

let guessNumber = guessfunc();

guessNumber();
