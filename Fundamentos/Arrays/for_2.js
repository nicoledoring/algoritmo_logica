const notas = [7, 8, 3, 5, 10, 9, 8, 8];
let valores = " "

//foreach - percorre cada um dos elementos


// para cada repetição "nota" vai ter o valor atual
for(let nota of notas){
    console.log(nota);
}


for(let nota of notas){
    valores += nota + " ";
}
console.log(valores);

let indices = " ";

for(let indice in notas){
    indices += indice + " ";
}

console.log(indices);