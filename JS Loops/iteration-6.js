const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];
for (let step = 0; step < toys.length; step++) {
  if(toys[step].name.includes("gato")){
    toys.splice(step,1)
    step--;
  }
  
  
}


console.log(toys);