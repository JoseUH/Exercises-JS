const jugadores = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

function swap(array, firstIndex, secondIndex) {
  //voy a guardar para despues el valor
  const primerElement = array[firstIndex];
  // ahora le voy a decir que el esta posicion, ahora va a valer lo que valia la otra posición
  array[firstIndex] = array[secondIndex];
  //yo que me habia guardado el valor de mi primer elemento, le voy a decir que la posicion del segundod elemento, es ahora la del primero
  array[secondIndex] = primerElement;
  return array;
}
swap(jugadores, 0, 2);
console.log(jugadores);
