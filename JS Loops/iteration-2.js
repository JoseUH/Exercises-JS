const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];
  function SearchAlumns(param) {
    for (let step = 0; step < param.length; step++) {
       if (param[step].T1 ) {
         
       }
    }
    
  }

console.log(alumns);
























// for (let index = 0; index < alumns.length; index++) {
//   alumn = alumns[index];

//   let approvedCount = 0;
//   approvedCount = alumn.T1 ? approvedCount + 1 : approvedCount;
//   approvedCount = alumn.T2 ? approvedCount + 1 : approvedCount;
//   approvedCount = alumn.T3 ? approvedCount + 1 : approvedCount;
//   alumn.isApproved = approvedCount >= 2 ? true : false;
// }
