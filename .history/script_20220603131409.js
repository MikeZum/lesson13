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
      alert("Верно, Вы угадали загаданное число!");
    } else if (userNum < randomNum) {
      alert("Ваше число меньше! Осталось попыток: ");
      userNum = +prompt("Введите число");
      guessNumber();
    } else if (isNaN(userNum)) {
      userNum = confirm("Можно вводить только числа");
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
