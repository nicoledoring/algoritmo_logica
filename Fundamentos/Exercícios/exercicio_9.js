function repetir(elemento, repeticao){
    let sequencia = [];
    for(let i = 0; i < repeticao; i ++){
    sequencia.push(elemento);
    }
    return sequencia;
}

console.log(repetir("nick", 3));