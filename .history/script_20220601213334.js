"use strict";

const po = 10;

const pp = function (ind) {
  if (ind > 0) {
    console.log("карт№" + ind + "поч");
    ind--;
    pp(ind);
  }
};
