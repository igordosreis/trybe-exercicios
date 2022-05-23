// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
let arrayOfEvenNumbers = [];
    for (let currentArray of vector){
        for (let currentNumber of currentArray) {
            if (currentNumber % 2 === 0) {
                arrayOfEvenNumbers.push(currentNumber);
            }
        }
    }
    return arrayOfEvenNumbers;
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// let newArr = [];
// console.log(vector[1].length);

// for (let index = 0; index < vector.length; index += 1){
//     for (let index1 = 0; index1 < vector[index].length; index1 += 1) {
//         // console.log(vector[index][index1]);
//         console.log(vector[index][index1] % 2);
//         let aux = vector[index][index1];
//         if (aux % 2 === 0) {
//             newArr.push(aux);
//         }
//     }
// }
// console.log(newArr);

// for (let currentArray of vector){
//     for (let currentNumber of currentArray) {
//         // console.log(vector[index][index1]);
//         // console.log(currentNumber % 2);
//         // let aux = currentNumber;
//         if (currentNumber % 2 === 0) {
//             newArr.push(currentNumber);
//         }
//     }
// }
// console.log(newArr);
