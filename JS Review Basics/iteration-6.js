const jugadores = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

function swap(array, param1, param2) {
 
  array.splice(param1, 1, param2);
    
}
swap(jugadores, "Mesirve", "Ronalguiño");
console.log(jugadores);
