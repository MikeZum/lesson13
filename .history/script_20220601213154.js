"use strict";

const p = 10;

const pp = function (ind) {
  if (ind > 0) {
    console.log("карт№" + ind + "поч");
    i--;
    pp(ind);
  }
};
