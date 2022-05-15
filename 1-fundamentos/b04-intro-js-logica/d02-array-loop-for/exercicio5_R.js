let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [-5, -9, -3, -19, -70, -8, -100, -2, -35, -27];
let bigNumber = numbers[0];
// let bigNumber = null;
// let bigNumber = null; // caso a variavel de teste seja do tipo null ou undefined e o array use numeros negativos, o console retorna null ou undefined

for (i = 0 ; i < numbers.length ; i += 1) {
        if (numbers[i] >= bigNumber) {
            bigNumber = numbers[i];
    }
}

console.log(bigNumber);