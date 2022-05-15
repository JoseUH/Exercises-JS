const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function finderName(param, valor) {
  for (let step = 0; step < param.length; step++) {
    if (param[step] === valor) {
      console.log("El elemento " + valor + " existe ");
    }
  }

  console.log("El elemento " + valor + " no existe ");
}

finderName(nameFinder, "Clint");

// for (let i = 0; i < param.length; i++) {
//   if (param[i] === value) {
//     return console.log(true, i);
//   }
// }
// return console.log(false);
