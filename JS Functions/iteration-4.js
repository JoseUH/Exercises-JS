const numbers = [12, 21, 38, 5, 45, 37, 6];
let promedio = 0;
function average(param) {
  for (let step = 0; step < param.length; step++) {
    promedio += param[step];
  }
  promedio = promedio / param.length;
}
average(numbers);
console.log(promedio);
