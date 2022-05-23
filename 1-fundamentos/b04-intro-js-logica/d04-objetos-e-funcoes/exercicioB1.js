// Primeira versao, usando array
function romanToArabic(romanNumber) {
    
romanNumber = romanNumber.toLowerCase();
let inversedRomanNumber = romanNumber.split('').reverse();
let decodedNumber = [];
    for (let currentRomanNumber of inversedRomanNumber) {
        if (currentRomanNumber === 'i') {
            decodedNumber.push(1);
        }
        if (currentRomanNumber === 'v') {
            decodedNumber.push(5);
        }
        if (currentRomanNumber === 'x') {
            decodedNumber.push(10);
        }
        if (currentRomanNumber === 'l') {
            decodedNumber.push(50);
        }
        if (currentRomanNumber === 'c') {
            decodedNumber.push(100);
        }
        if (currentRomanNumber === 'd') {
            decodedNumber.push(500);
        }
        if (currentRomanNumber === 'm') {
            decodedNumber.push(1000);
        }
    }

let sum = decodedNumber[0];

for (let index = 0; index < decodedNumber.length; index += 1) {
    if (decodedNumber[index] <= decodedNumber[index + 1]) {
        sum += decodedNumber[index + 1];
    } else if (decodedNumber[index] > decodedNumber[index + 1]) {
        sum -= decodedNumber[index + 1];
    }
}
return sum;
}
console.log(romanToArabic('MCMLXXXVI'));
console.log(romanToArabic('MMXVIII'));
console.log(romanToArabic('XI'));

//Segunda versao, usando objeto
function romanToArabic(romanNumber) {
romanNumber = romanNumber.toLowerCase();
let inversedRomanNumber = romanNumber.split('').reverse();
let romanNumbersList = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
}
sum = romanNumbersList[inversedRomanNumber[0]];

for (let index = 0; index < inversedRomanNumber.length; index += 1) {
    if (romanNumbersList[inversedRomanNumber[index]] <= romanNumbersList[inversedRomanNumber[index + 1]]) {
        sum += romanNumbersList[inversedRomanNumber[index + 1]];
    } else if (romanNumbersList[inversedRomanNumber[index]] > romanNumbersList[inversedRomanNumber[index + 1]]) {
        sum -= romanNumbersList[inversedRomanNumber[index + 1]];
    }
}
return sum;
}
console.log(romanToArabic('MCMLXXXVI'));
console.log(romanToArabic('MMXVIII'));
console.log(romanToArabic('XI'));

//Terceira versao, com objeto e sem .reverse()
function romanToArabic(romanNumber) {
    romanNumber = romanNumber.toLowerCase();
    // let inversedRomanNumber = romanNumber.split('').reverse();
    let romanNumbersList = {
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000,
    }
    sum = romanNumbersList[romanNumber[romanNumber.length - 1]];
    
    for (let index in romanNumber) {
        if (romanNumbersList[romanNumber[romanNumber.length - 1 -index]] <= romanNumbersList[romanNumber[romanNumber.length - 2 -index]]) {
            sum += romanNumbersList[romanNumber[romanNumber.length - 2 -index]];
        }  
        if (romanNumbersList[romanNumber[romanNumber.length - 1 -index]] > romanNumbersList[romanNumber[romanNumber.length - 2 -index]]) {
            sum -= romanNumbersList[romanNumber[romanNumber.length - 2 -index]];
        }
    }
    return sum;
}
console.log(romanToArabic('MCMLXXXVI'));
console.log(romanToArabic('MMXVIII'));
console.log(romanToArabic('XI'));