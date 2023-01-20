function estaEntre (num, min, max, boo=false){
    if(boo == true){
        return "true";
    }
    if(num >= min && num <= max){
        return "true";
    } 
    if(num <= min || num >= max){
        return "false";
    }
}

console.log(estaEntre(3, 150, 3, true));