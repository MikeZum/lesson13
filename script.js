"use strict";

const bookOrder = document.querySelectorAll(".book");
const headline = document.querySelectorAll("a");
const deleteAdv = document.querySelector(".adv");
const chapterOrder = document.querySelectorAll(".book > ul > li");
const addChapter = document.createElement("li");

// Порядок книг
bookOrder[0].before(bookOrder[1]);
bookOrder[2].before(bookOrder[4]);
bookOrder[2].before(bookOrder[3]);
bookOrder[2].before(bookOrder[5]);

// Изменяем background-image
document.body.classList.add("newBackground");
// document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// Исправляем заголовок
headline[4].innerText = "Книга 3. this и Прототипы Объектов";

// Удаляем рекламу
deleteAdv.remove();

// Порядок глав во второй книге
chapterOrder[1].after(chapterOrder[6]);
chapterOrder[1].after(chapterOrder[3]);
chapterOrder[6].after(chapterOrder[8]);
chapterOrder[8].after(chapterOrder[4]);
chapterOrder[4].after(chapterOrder[5]);
chapterOrder[5].after(chapterOrder[7]);
chapterOrder[7].after(chapterOrder[9]);

// Порядок глав в пятой книге
chapterOrder[47].after(chapterOrder[55]);
chapterOrder[55].after(chapterOrder[49]);
chapterOrder[49].after(chapterOrder[50]);
chapterOrder[50].after(chapterOrder[48]);
chapterOrder[48].after(chapterOrder[52]);
chapterOrder[52].after(chapterOrder[53]);

// Добавляем главу восем в шестую книгу
addChapter.innerText = "Глава 8: За пределами ES6";
chapterOrder[25].append(addChapter);

console.log(bookOrder);
console.log(headline[4], "headline");
console.log(deleteAdv, "deleteAdv");
console.log(chapterOrder);
console.log(addChapter, "addChapter");

// Черновик
// document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

// Исправляем заголовок
// const headline = document.querySelectorAll("a");
// headline[4].innerHTML = "<strong>Книга 3. this и Прототипы Объектов</strong>";

// Добавляем главу восем в шестую книгу

// const addChapter = document.createElement("li");

// addChapter.innerHTML = '<strong>"Глава 8: За пределами ES6"</strong>';
// chapterOrder[25].append(addChapter);
// addChapter.textContent = '"Глава 8: За пределами ES6"';
// addChapter.innerHTML = "Глава 8: За пределами ES6";
