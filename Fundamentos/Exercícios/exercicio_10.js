function simbolo(quantidade){
    let a = "+";
    for(let i = 1; i < quantidade; i++){
        a += "+";
    }
    return a;
};

console.log(simbolo(6));