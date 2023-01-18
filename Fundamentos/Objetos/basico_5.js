const cliente = {
    codigo: 16532, 
    nome:"Ana", 
    vip:true, 
    endereco:{
        logradouro: "Rua ABC",
        numero:123,
        complemento:"apto. 101 bl B",
        pontosRef: [
           {nome: "hospital x", muitoProximo: true}, 
           {nome: "shopping Y", muitoProximo: false},
        ]
    },
    nomeFilhos: ["Bia", "Carlos", " Gabriel" ]
};

console.log(cliente["endereco"]["logradouro"]);
console.log(cliente.endereco.logradouro);
console.log(cliente. endereco. pontosRef[1]);





const cachorro = {
    nome:"Toby", raca: "vira-lata", porte: "médio"
}

console.log(cachorro.raca);