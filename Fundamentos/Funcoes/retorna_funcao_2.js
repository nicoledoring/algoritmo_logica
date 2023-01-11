function retornarUmaFuncao(){
    return function(){
        return function(){
            return "boa tarde";
        }
    }
}

console.log(retornarUmaFuncao);
console.log(retornarUmaFuncao());
console.log(retornarUmaFuncao()());
console.log(retornarUmaFuncao()()());