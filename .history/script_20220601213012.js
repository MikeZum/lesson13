"use strict";

const p = 10;

const pp = function (i) {
  if (i > 0) {
    console.log("карт№" + i + "поч");
    i--;
    pp(i);
  }
};
