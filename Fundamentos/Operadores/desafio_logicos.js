// criar duas expressoes para resultar em true arti relac logicos e + duas para resultar em falso 


let a = 25 * 2;
let b = 25 * 4;
let c = 40 * 2;
let d = 31 * 18;
//1 true
console.log(!(a > b));
//2 true
console.log((c == d) || (a != d));
//1 false
console.log((c < a) && (b >= d));
//2 false
console.log(!((a > d) || (c < d)))
