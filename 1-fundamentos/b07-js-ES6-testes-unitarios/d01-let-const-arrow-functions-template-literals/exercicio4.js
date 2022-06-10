// Crie uma função que receba uma frase e retorne a maior palavra.

// Exemplo:

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const randomPhrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

// let arr = str.split(' ');

// console.log(arr);

// console.log(arr[0].length);

// const biggestWord = (phrase) => {
//     wordArray = phrase.split(' ');
//     bigWord = '';
//     for (let index = 0; index < wordArray.length; index += 1) {
//         if (wordArray[index].length > bigWord.length) {
//             bigWord = wordArray[index];
//         }
//     }
//     return bigWord;
// }
// console.log(biggestWord(str));

const biggestWord1 = (str) => str.split(' ').sort((a, b) => a.length - b.length)[str.split(' ').length - 1];
console.log(biggestWord1(randomPhrase));

// GABARITO
// const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];