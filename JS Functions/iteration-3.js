const numbers = [1, 2, 3, 5, 45, 37, 58];
const numbers2 = [1, 2, 3, 5, 45, 37, 58, 1];
let sumaTotal = 0;
function sumAll(param) {
  for (let step = 0; step < param.length; step++) {
    sumaTotal = sumaTotal + param[step];
  }
}

sumAll(numbers2);
console.log(sumaTotal);
