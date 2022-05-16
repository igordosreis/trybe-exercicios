let oddNumbers = '';

for (i = 1 ; i <= 50 ; i += 1) {
    if (i % 2 == 1) {
        oddNumbers += ' ' + i;
    }
}
console.log(oddNumbers);