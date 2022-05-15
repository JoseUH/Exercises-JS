const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];
let isApproved = true ;
function SearchAlumns(param) {
  for (let step = 0; step < param.length; step++) {
    if (
      (param[step].T1 === true && param[step].T2 === true) ||
      (param[step].T2 === true && param[step].T3 === true) ||
      (param[step].T3 === true && param[step].T1 === true)
    ) {
       isApproved.push(param[step])
    }
  }
}

console.log(isApproved);
