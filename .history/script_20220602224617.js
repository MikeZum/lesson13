let randomNum = parseInt(Math.random() * 100);
console.log(randomNum);

function guessNumber(userNum) {
  userNum = prompt("Введите число");

  if (isNaN(userNum)) {
    alert("Можно вводить только числа");
    guessNumber(userNum);
  }

  if (userNum === null) {
    return;
  }

  if (userNum == randomNum) {
    alert("Верно, Вы угадали загаданное число!");
    return;
  } else if (userNum < randomNum) {
    alert("Ваше число меньше");
    guessNumber(userNum);
  } else if (userNum > randomNum) {
    alert("Ваше число больше");
    guessNumber(userNum);
  }
}

guessNumber();
