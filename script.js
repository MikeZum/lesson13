"use strict";

const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const eBtn = document.querySelector("#e_btn");
const range = document.querySelector("#range");
const circle = document.querySelector("#circle");
const inputText = document.querySelector("#text");
let textColor;

const getColor = function () {
  textColor = inputText.value;
};

const changeColor = function () {
  square.style.backgroundColor = textColor;
  inputText.value = "";
};

eBtn.style.display = "none";

range.addEventListener("input", () => {
  circle.style.height = range.value + "%";
  circle.style.width = range.value + "%";
});

inputText.addEventListener("input", getColor);
btn.addEventListener("click", changeColor);
