let number = 727;
let dividerCounter = 0;

for (i = 0 ; i <= number ; i += 1) {
    if (number % i === 0) {
        dividerCounter += 1;
    }
}

if (dividerCounter === 2) {
    console.log('The number', number, 'is prime.');
} else {
    console.log('The number', number, 'is not prime.');
}