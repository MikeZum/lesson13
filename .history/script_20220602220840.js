let guessfunc = () => {
  function Res() {
    let randomNum = parseInt(Math.random() * 1000);
    let attempts = 10;

    let userNum = prompt("Введите число. У Вас 10 попыток");

    if (isNaN(userNum)) {
      alert("Можно вводить только числа");
    }

    if (attempts === 0) {
      alert("Попытки закончились");
    }

    if (userNum === null) {
    }

    attempts--;

    if (userNum == randomNum) {
      alert("Верно, Вы угадали загаданное число!");
    } else if (userNum < randomNum) {
      alert("Ваше число меньше! Осталось попыток: " + attempts);
      userNum = +prompt("Введите число");
    } else if (userNum > randomNum) {
      alert("Ваше число больше! Осталось попыток: " + attempts);
      userNum = +prompt("Введите число");
    }
  }
  return Res;
};

let guessNumber = guessfunc();

console.log(userNum);

guessNumber();
