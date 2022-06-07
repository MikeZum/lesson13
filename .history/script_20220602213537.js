var number = parseInt(Math.random() * 5);
alert(
  "Привет! Я компьютер! Я загадал для тебя число, и ты должен будешь его отгадать. Если ты напишешь слишком большое или слишком маленькое число, я скажу тебе об этом. Дерзай!"
);
while (true) {
  var userNumber = prompt("Введи число от 1 до 100. Для выхода тыкни Z");
  if (userNumber == "z" || userNumber == "Z") {
    break;
  }
  userNumber = parseInt(userNumber);

  if (userNumber > number) {
    alert("ваше число слишком большое");
  } else if (userNumber < number) {
    alert("ваше число слишком маленькое");
  } else if (userNumber == number) {
    alert("Вот видишь! Я всегда в тебя верил! Молодец! Ты угадал!");
    var endorreset = prompt(
      "Если я тебе ещё не надоел, то ты можешь сыграть ещё раз. Для этого напиши ЕЩЁ. А можешь и не играть. Для этого напиши ВСЁ"
    );
    endorreset = endorreset.toLowerCase();

    if (endorreset == "ещё" || endorreset == "еще") {
      number = parseInt(Math.random() * 5);
    } else {
      break;
    }
  } else {
    alert("Нетужки, давай пиши, а если хочешь выйти нажми z");
  }
}
