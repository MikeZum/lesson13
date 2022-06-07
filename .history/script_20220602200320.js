// function getUserNumber() {
//   let userNumber = parseInt(prompt("enter"));
//   if (userNumber == null) {
//     return;
//   }
//   if (!userNumber.length) {
//     str = getUserNumber("empty");
//   }
//   if (Number.isNaN(userNumber) || !Number.isInteger(userNumber)) {
//     str = getUserNumber("not");
//   }
//   return +userNumber;
// }

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 1000) | 0;
  return randomNumber;
}

let randomNumber = getRandomNumber();
let guessNumber = getUserNumber();

function guessGame(randomNumber, guessNumber) {
  while (guessNumber != randomNumber) {
    if (guessNumber < randomNumber) {
      alert("больше");
    }
    if (guessNumber > randomNumber) {
      alert("меньше");
    }
    if (guessNumber == randomNumber) {
      alert("угадал");
    }
  }
}

guessGame(randomNumber, guessNumber);
