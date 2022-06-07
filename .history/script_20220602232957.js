let guessfunc = () => {
  function Res() {
    let randomNum = parseInt(Math.random() * 1000);
    console.log(randomNum);

    if (isNaN(userNum)) {
      alert("Можно вводить только числа");
    }

    if (userNum === null) {
      alert("ййй");
      return;
    }

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

guessNumber();
