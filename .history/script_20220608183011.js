"use strict";

const deleteAdv = document.querySelector(".adv");
console.log(deleteAdv);
deleteAdv.remove();

// const backgroundImg = document.querySelectorAll("body");
// backgroundImg.style.backgroundImage = url(./image/open_book.jpg);

const books = document.querySelectorAll(".book");
console.log(books);

books[0].before(books[1]);
books[2].before(books[4]);
books[2].before(books[3]);
books[2].before(books[5]);
