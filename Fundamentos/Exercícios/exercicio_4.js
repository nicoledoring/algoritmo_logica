function nomeDoMes(numero){
    let mes = null;
    if (numero == 1){
        mes = "Janeiro"};
    if (numero == 2){
        mes = "Fevereiro"};
    if (numero == 3){
        mes = "Março"};
    if (numero == 4){
        mes = "Abril"};
    if (numero == 5){
        mes = "Maio"};
    if (numero == 6){
        mes = "Junho"};
    if (numero == 7){
        mes = "Julho"};
    if (numero == 8){
        mes = "Agosto"};
    if (numero == 9){
        mes = "Setembro"};
    if (numero == 10){
        mes = "Outubro"};
    if (numero == 11){
        mes = "Novembro"};
    if (numero == 12){
        mes = "Dezembro"};
    
    return mes;
}

console.log(nomeDoMes(11));