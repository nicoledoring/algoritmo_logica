// ir p shopping, exemplo 1 

let temDinheiro = false;
let estaEnsolarado = false;
let carroEstaNaGaragem = false;

let resultadoE = "#1 (AND) - Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = "#2 (OR) - Vai para o shopping?";
resultadoOU += estaEnsolarado || carroEstaNaGaragem //pipe = alt 124
console.log(resultadoOU);

console.log(true !== false);// ou exclusivo

console.log("não verdadeiro:" + !true);// negação lógica
console.log("não falso:" + !false);