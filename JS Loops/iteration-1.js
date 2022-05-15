const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

function showProducts(param) {
   for (let step = 0; step < param.length; step++) {
     if (param[step].includes("Camiseta")) {
       console.log(param[step])
     }
     
     
   }
 
}

showProducts(products);
