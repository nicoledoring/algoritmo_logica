const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // mostrar começando no 9 e pulando de 2 em 2

for( let i = 8; i >= 0 ; i -= 2){
    console.log(numeros[i]); // numeros[i] passa o indice que quero acessar 
}

for( let i = numeros.length - 2; i >= 0 ; i -= 2){
    console.log(numeros[i]); // versão do professor (melhor pois não pega diretamente um elemento especifico)
}



for(let i = 200; i < 300; i +=2){

    console.log("aqui é o i: " + i);
}