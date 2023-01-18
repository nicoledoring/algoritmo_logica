// objeto data 3 atributos = dia mes e ano e dentro do objeto metodo exibir retornar dia/mes/ano~


const data = {
    dia: 12,
    mes: 3, 
    ano: 2003,
    exibir:
        function (){
            return `${this.dia}/${data.mes}/${data.ano}`;
        }
    
};

console.log(data.exibir());