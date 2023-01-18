function criarData(dia, mes, ano){
    return{
        dia, // a chave e os parametros neste caso são iguais (funcaoeobjeto1) =  podemos retirar os parametros
        mes,
        ano,
        exibir() { // funcao criada apenas com parenteses e sem dois prontos apos "exibir"
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    }
};




const data1 = criarData(9, 10, 2010);
const data2 = criarData(22, 11, 2023);
const data3 = criarData(3, 4, 2022);

console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());

console.log(data1);
console.log(data2);
console.log(data3);