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
      console.log (true, step)
      console.log("El elemento " + valor + " existe ");
    }
  }
 console.log(false)
  
}

finderName(nameFinder, "Benito");