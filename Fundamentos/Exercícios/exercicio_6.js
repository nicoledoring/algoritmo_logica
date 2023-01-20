function inverso(a) {

    if (typeof a == "string") {
        return "Booleano ou números esperado, mas o parâmetro é do tipo string";
    }
    if (typeof a == "boolean") {
        if (a == true) {
            a = false;
        }else if(a == false){
            a = true;
        }  
    }
    
    if (typeof a == "number") {
        if(a > 0) {
            a = a - (a * 2);
        }else if (a < 0){
            a = a - (2 * a);
        }
    }
    return a;
}

console.log(inverso(3));
