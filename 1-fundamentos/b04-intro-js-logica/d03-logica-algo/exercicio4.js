let biggestPrime = 0;
let primesList = [];

for (i = 0 ; i <= 50 ; i += 1){
    let dividerCounter = 0;
    for (ii = 0 ; ii <= i ; ii += 1) {
        if (i % ii == 0) {
            dividerCounter += 1;
        }  
    }
    if (dividerCounter === 2 ) {
        biggestPrime = i;
        primesList.push(i);
    }
}
console.log(biggestPrime);
console.log(primesList);