// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

function mostRepeatedNumber(numbersArray) {
    let repetitionTester = 0;
    let numberHolder = 0;
    for (let currentNumber of numbersArray) {
        let repetitionCounter = 0;
        for (let numberTester of numbersArray) {
            if (currentNumber === numberTester) {
                repetitionCounter += 1;
            }
        }
        if (repetitionCounter > repetitionTester) {
            repetitionTester = repetitionCounter;
            numberHolder = currentNumber;
        }

    }
    return numberHolder;
}
console.log(mostRepeatedNumber([2, 3, 2, 5, 8, 2, 3]));


// let array = [2, 3, 2, 5, 8, 2, 3, 0, 0, 0, 0, 0, 77, 77, 77];

// let counter = 0
// let mostRepeated = 0
// for (number of array) {
//     for (number2 of array) {
//         if (number === number2) {counter += 1;}
//     }
//     if (counter > mostRepeated) {mostRepeated = number;}
//     counter = 0;
// }

// console.log(mostRepeated)
