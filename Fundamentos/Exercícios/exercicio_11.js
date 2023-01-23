function primeiroEUltimoElemento(a){
    return [a[0], a[a.length - 1]];
}

console.log(primeiroEUltimoElemento([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(primeiroEUltimoElemento(["oi", "erlei", "bobinho"]));