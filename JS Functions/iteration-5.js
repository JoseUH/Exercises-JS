const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

let suma = 0;
let longitud = "";

function averageWord(param) {
  for (let step = 0; step < param.length; step++) {
    if (typeof param[step] === "number") {
      suma += param[step];
    } else typeof param[step] === "string";
    {
      
      longitud = param[step].length;
      console.log("El string tiene " + longitud + " caracteres");
    }
  }
}

averageWord(mixedElements);
console.log("La suma total es de " + suma);


