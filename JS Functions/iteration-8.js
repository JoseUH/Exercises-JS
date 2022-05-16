const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
let repeticiones = 0;
const repetido = [];
function repeatCounter(param) {
  for (i = 0; i < param.length; i++) {
    for (e = 0; e < param.length; e++) {
      if (param[i] == param[e]) {
        repeticiones++;
      }
    }
    if (!repetido.includes(param[i])) {
      repetido.push(param[i], repeticiones);
    }
    repeticiones = 0;
  }
}

repeatCounter(counterWords);

console.log(repetido);
