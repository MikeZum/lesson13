"use strict";

// const po = 10;

// for (let index = 1; index < 10; index++) {
//   console.log("карт№", index, "поч");
// }

// const pp = function (ind) {
//   if (ind > 0) {
//     console.log("карт№" + ind + "поч");
//     ind--;
//     pp(ind);
//   }
// };

// pp(po);

const foo = (...args) => {
  console.log(args);
};

foo(1, 2, 3, 4);
