let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;

for(i = 0 ; i < numbers.length ; i += 1) {
    if (numbers[i] % 2 === 1) {
        oddNumbers += 1;
    } 
}

if (oddNumbers > 0) {
    console.log('Quantidade de numeros impares: ' + oddNumbers);
} else {
    console.log('nenhum valor ímpar encontrado');
}