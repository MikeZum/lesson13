"use strict";

const btn = document.getElementById("btn");
const text = document.getElementById("text");
const eBtn = document.getElementById("e_btn");
const range = document.getElementById("range");
const circle = document.getElementById("circle");

btn.addEventListener("click", () => {
  btn.style.backgroundColor = text.value;
});

eBtn.style.display = "none";

range.addEventListener("input", () => {
  circle.style.height = range.value + "%";
  circle.style.width = range.value + "%";
});
