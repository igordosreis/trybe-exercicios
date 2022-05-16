let number = 10;
let factorial = number;

for (i = factorial ; i >= 1 ; i -= 1) {
    factorial = factorial * i;
    // factorial = factorial + i;
}

factorial = factorial / number;

console.log(factorial);