// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para: 
// Adição (a + b),  Subtração (a - b), Multiplicação (a * b), Divisão (a / b), Módulo (a % b)  

function add(a, b) {
    return a + b;
}
console.log(add(1,2));


function subtract(a, b) {
    return a- b;
}
console.log(subtract(1,2));


function multiply(a, b) {
    return a * b;
}
console.log(multiply(2,3));


function divide(a, b) {
    return a / b;
}
console.log(divide(1,3));



// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. 

function biggestNumberTwo(a, b) {
    if ( a >= b) {
        return a;
    } else {
        return b;
    }
}
console.log(biggestNumberTwo(45,71));



// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. 

function biggestNumberThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }
    else if ( b >= c) {
        return b;
    }
    else {
        return c;
    }
}
console.log(biggestNumberThree(4,32,75));



// 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 

function posOrNeg(a) {
    if (a > 0) {
        return 'positivo';
    } 
    else if ( a === 0 || a === -0) {
        return 'zero';
    }
    else {
        return 'negativo';
    }
}
console.log(posOrNeg(0));



// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 

function traingleTest(a, b, c) {
    if (a + b + c === 180) {
        return true;
    }
    else if (a >= 180 || b >= 180 || c >= 180 || a <= 0 || b <=0 || c <= 0) {
        return 'ERROR';
    }
    else {
        return false;
    }
}
console.log(traingleTest(30,60,90));