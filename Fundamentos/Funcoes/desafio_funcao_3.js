//media usando as duas maiores notas e mostrar o status = aprovado se nota >= 7 recuperação  se >= 4 e < 6.9 e <3.9 = reprovado

const nota1 = 10;
const nota2 = 2.5;
const nota3 = 4.3;


let maiorNotaA;
let maiorNotaB;

function calculoMedia(a, b, c){
    if(a >= b){
        maiorNotaA = a;
    } else {
        maiorNotaA = b;
    }
    if(b >= c){
        maiorNotaB = b;
    } else {
        maiorNotaB = c;
    }
}

function conceito(){
    calculoMedia(nota1, nota2, nota3)
    let resultado = (maiorNotaA + maiorNotaB) / 2 

    if (resultado >= 7 ){
        console.log("Aprovado");
    }
    if (resultado >= 4 && resultado <= 6.99){
        console.log("Em recuperação");
    }
    if (resultado > 0 && resultado <= 3.99){
        console.log("Reprovado");
    }
}

conceito()