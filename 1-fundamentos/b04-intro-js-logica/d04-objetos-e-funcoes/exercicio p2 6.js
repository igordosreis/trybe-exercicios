// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.

//Impossivel usar dessa forma por uma variavel do tipo number não pode ser iterada como uma string ou array

// function numberToOneSum(number) {
//     sumHolder = 0;
//     for (let numberRoamer of number) {
//         sumHolder = sumHolder + numberRoamer;
//     }
//     return sumHolder;
// }
// console.log(numberToOneSum(5));


function numberToOneSum(number) {
    sumHolder = 0;
    for (let numberRoamer = number ; numberRoamer >= 1 ; numberRoamer -= 1) {
        sumHolder = sumHolder + numberRoamer;
    }
    return sumHolder;
}
console.log(numberToOneSum(5));


