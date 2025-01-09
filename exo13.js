function calculer (n1,n2,op) {
    let res;
    if (op === '+') {
        res = n1 + n2;
    }
    if (op === '-') {
        res = n1 - n2;
    }
    if (op === '*') {
        res = n1 * n2;
    }
    if (op === '/') {
        res = n1 / n2;
    }
    return res ;
}

console.log(calculer(10,5,"+"));
console.log(calculer(10,5,"-"));
console.log(calculer(10,5,"*"));
console.log(calculer(10,5,"/"));


