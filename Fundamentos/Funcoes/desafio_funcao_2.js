// parametro nota -> retono(conceito), se não achar = nulo


function calculoNota(nota){
   let conceito = null;
    if (nota == 10){
        conceito = "A+";
    }
    if (nota == 9){
        conceito = "A";
    }
    if (nota == 8){
        conceito = "B+";
    }
    if (nota == 7){
        conceito = "B";
    }
    if (nota == 6){
        conceito = "C+";
    }
    if (nota == 5){
        conceito = "C";
    }
    if (nota == 4){
        conceito = "D+";
    }
    if (nota == 3){
        conceito = "D";
    }
    if (nota == 2){
        conceito = "E+";
    }
    if (nota == 1){
        conceito = "E";
    }
    if (nota == 0){
        conceito = "F";
    }

    return conceito;
}
console.log(calculoNota(12));