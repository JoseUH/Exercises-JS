const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
for (let step = 0; step < placesToTravel.length; step++) {
  if (placesToTravel[step].id === 11 || placesToTravel[step].id === 40) {
    placesToTravel.splice(step, 1);
  }
}
console.log(placesToTravel)