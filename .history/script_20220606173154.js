let randomNum = parseInt(Math.random() * 100);
console.log(randomNum);
let userNum = prompt("Угадай число от 1 до 100");
let attempts = 3;

let guessfunc = () => {
  if (userNum == null) {
    alert("Игра окончена");
    return;
  }
  if (userNum == randomNum) {
    result = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
    if (result) {
      location.reload();
      randomNum = parseInt(Math.random() * 100);
    // } else {
    //   return;
    // }
  } else if (isNaN(userNum)) {
    alert("Введи число!");
    userNum = prompt("Введите число");
    guessfunc();
  } else if (userNum < randomNum) {
    alert("Загаданное число больше");
    userNum = prompt("Введите число");
    guessfunc();
  } else if (userNum > randomNum) {
    alert("Загаданное число меньше");
    userNum = prompt("Введите число");
    guessfunc();
  }

  return;
};

guessfunc();
