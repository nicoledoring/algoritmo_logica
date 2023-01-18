const produto = {
    nome:"ipad", preco:5600, desconto: 0.15, precoComDesconto: function(){
        return this.preco * (1 - this.desconto); // this é usado para referenciar um elemento já existente no objeto
    }
};

console.log(produto.nome);
console.log(produto.precoComDesconto())