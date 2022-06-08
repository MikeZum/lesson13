"use strict";

const deleteAdv = document.querySelector(".adv");
console.log(deleteAdv);
deleteAdv.remove();

// const backgroundImg = document.querySelectorAll("body");
// backgroundImg.style.backgroundImage = url(./image/open_book.jpg);

// const books = document.querySelectorAll(".book");
// console.log(books);

// books[0].before(books[1]);
// books[2].before(books[4]);
// books[2].before(books[3]);
// books[2].before(books[5]);

const addChapter = document.querySelectorAll(".book > ul > li");
console.log(addChapter);

addChapter[1].after(addChapter[6]);
addChapter[1].after(addChapter[3]);
addChapter[6].after(addChapter[8]);
addChapter[8].after(addChapter[4]);
addChapter[4].after(addChapter[5]);
addChapter[5].after(addChapter[7]);
addChapter[7].after(addChapter[9]);

// addChapter[2].before(addChapter[4]);
// addChapter[2].before(addChapter[3]);
