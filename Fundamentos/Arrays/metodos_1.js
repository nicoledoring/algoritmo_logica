const numeros = [1, 2, 3, 4, 5, 4];

numeros.push(6); // incluir novo elemento
numeros[0] = 100;  // modificar elemento previamente definido (pega pelo índice)
numeros.indexOf(4);

console.log(numeros.indexOf(4)); // mostra qual o índice do elemento 4
console.log(numeros.indexOf(4, 4));// mostra qual o índice do elemento 4 a partir do índice 3 
console.log(numeros.includes(10)); // falso pois o numero não está incluso no array
console.log(numeros.includes(6));
console.log(numeros.join(" - ")); // como os elementos ficam separados
console.log(numeros);

const numeros2 = numeros.concat(7, 8, 9); // concat = gera novo array com os elementos do antigo mais os definidos agora
console.log(numeros2);