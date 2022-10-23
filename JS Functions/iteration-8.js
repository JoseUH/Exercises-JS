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



// function repeatCounter(array) {
//   let counter = {}; // Declaro un objeto vacío
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] in counter) {
//       // Si el elemento del array está en mi objeto counter
//       counter[array[i]]++; // Cojo ese elemento y le sumo 1
//     } else {
//       counter[array[i]] = 1; // Si no está le dejo un 1
//     }
//   }
//   console.table(counter);
// }

// repeatCounter(counterWords);
