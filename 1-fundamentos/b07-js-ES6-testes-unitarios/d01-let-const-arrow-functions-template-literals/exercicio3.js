// 1. Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.

const fatorial = (numero) => {
    let fat = 1;
        for (let index = 1; index <= numero; index += 1) {
            fat *= index;
        }
        return fat;
}
console.log(fatorial(4));
console.log(fatorial(0));


const fatorialWhile = (numero) => {
    let fat = 1;
    let contador = 1;
    while (numero >= contador) {
        fat *= contador;
        contador += 1;
    }
    return fat;
}
console.log(fatorialWhile(4));
console.log(fatorialWhile(0));


const fatorialWhile1 = (numero) => {
    if (numero === 0) { return 1 };
    let fat = numero;
    while (numero > 2) {
        fat *= (numero - 1);
        numero -= 1;
    }
    return fat;
}
console.log(fatorialWhile1(4));
console.log(fatorialWhile1(0));


// const fatorialRec = (numero) => (numero > 2) ? numero * fatorialRec(numero -1) : fatorialRec(numero - 1);
const fatorialRec = (numero) => (numero > 1) ? numero * fatorialRec(numero - 1) : 1;
console.log(fatorialRec(4));
console.log(fatorialRec(0));



