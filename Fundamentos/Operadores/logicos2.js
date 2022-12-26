const t1 = false;
const t2 = false;

let comprarTV50 = t1 && t2; //and
console.log('vamos comprar a tv de 50"?' , (t1 && t2)); 

let comprarTV32 = t1 !== t2; //xor
console.log('vamos comprar a tv de 32"?' , (t1 !== t2)); 

let tomarSorvete = t1 || t2 // or
console.log('vamos comprar sorvete?' , tomarSorvete); 

let ficarEmCasa = !tomarSorvete //not 
console.log('vamos ficar em casa?' , ficarEmCasa);
