const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(param) {
  for (let step = 0; step < param.length; step++) {
    for (let stepa = 0; stepa < param.length; stepa++) {
        if (param[step]===param[stepa] && step !==stepa) {
          param.splice(stepa,1)
          stepa--
        } 
    }
     
  }
  
}
 removeDuplicates(duplicates)
 console.log(duplicates)
