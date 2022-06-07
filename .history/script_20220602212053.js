function randomNumber(m, n) {
  return Math.random() * (n - m + 1) + m;
}
alert('Добро пожаловать в шоу "Угадай число!"');
var m = parseInt(prompt("Введите нижнюю границу диапазона чисел", ""));
var n = parseInt(prompt("Введите верхнюю границу диапазона чисел", ""));
var number = randomNumber(m, n);
if (confirm("Число сгенерировано. Хотите попробовать его отгадать?")) {
  if (prompt("Введите число", "") == number) {
    if (m - n >= 10 && m - n <= 100) alert("Верно! Вы получаете 10 очков!");
    if (m - n > 100) alert("Верно! Вы получаете 100 очков!");
    if (m - n < 10) alert("Верно! Вы получаете 1 очко!");
  } else alert("Неверно! Вы теряете 10 очков!");
} else {
  if (confirm("Вы прощаетесь с нами?")) window.close();
}
