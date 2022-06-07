let guessfunc = () => {
  function Res() {
    let randomNum = parseInt(Math.random() * 100);
    console.log(randomNum);
    let attempts = 10;

    let userNum = prompt("Введите число. У Вас 10 попыток");

    if (isNaN(userNum)) {
      confirm("Можно вводить только числа");
    }

    if (attempts === 0) {
      alert("Попытки закончились");
    }

    if (userNum === null) {
      alert("Игра закончена");
      return;
    }

    attempts--;

    if (userNum == randomNum) {
      alert("Верно, Вы угадали загаданное число!");
    }
    if (userNum === null) {
      alert("Игра закончена");
      return;
    }
  }
  return Res;
};

let guessNumber = guessfunc();

guessNumber();
