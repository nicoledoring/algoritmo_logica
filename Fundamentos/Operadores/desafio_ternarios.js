const a = 8;
const b = 4;
const operacao = "abc"; // + - * /  


const resultado = operacao === "+" ? a + b : operacao === "-" ? a - b : operacao === "*" ? a * b : operacao === "/" ? a / b : "operação não encontrada";
console.log(resultado);
