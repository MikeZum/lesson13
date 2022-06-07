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
    } else {
      return;
    }
  }
  if (isNaN(userNum)) {
    alert("Введи число!");
    userNum = prompt("Введите число");
    guessfunc();
  }
  // if (attempts === 0) {
  //   const result = confirm("Попытки закончились, хотите сыграть еще?");
  //   if (result) {
  //     location.reload();
  //     randomNum = parseInt(Math.random() * 100);
  //   }
  // } else {
  //   return;
  // }

  // if (attempts === 0) {
  //   let choose;

  //   choose = confirm("Попытки закончились, хотите сыграть еще?");

  //   if (choose) {
  //     attempts = 3;
  //   }
  // }

  if (attempts === 0) {
    let choose;
    choose = confirm("Попытки закончились, хотите сыграть еще?");
    if (choose) {
      attempts = 3;
      location.reload();
      randomNum = parseInt(Math.random() * 100);
    } else {
      return;
    }
  }

  attempts--;
  if (userNum < randomNum) {
    alert("Загаданное число больше, осталось попыток " + attempts);
    userNum = prompt("Введите число");
    guessfunc();
  } else if (userNum > randomNum) {
    alert("Загаданное число меньше, осталось попыток " + attempts);
    userNum = prompt("Введите число");
    guessfunc();
  }

  return;
};

guessfunc();
