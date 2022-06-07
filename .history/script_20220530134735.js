let title = "project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1000;
let rollback = 20;
let fullPrice = 500000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей");
console.log("Стоимость разработки сайта" + " " + screenPrice + " " + "рублей");

console.log(screens.toLowerCase());
console.log(screens.split(", "));

let answer = confirm("Тебе есть 15?");
console.log(answer);
