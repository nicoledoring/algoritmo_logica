const data1 = {
    dia: 12,
    mes: 3, 
    ano: 2003,
    exibir:
        function (){
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    
};

const data2 = {
    dia: 22,
    mes: 11, 
    ano: 2023,
    exibir:
        function (){
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    
};

const data3 = {
    dia: 3,
    mes: 4, 
    ano: 2022,
    exibir:
        function (){
            return `${this.dia}/${this.mes}/${this.ano}`;
        }
    
};

console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());