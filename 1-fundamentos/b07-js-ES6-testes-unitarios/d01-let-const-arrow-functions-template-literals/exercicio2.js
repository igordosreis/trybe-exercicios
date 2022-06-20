//2. Crie uma função que retorne um array em ordem crescente. 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 

const numberSort = (numbersArray) => {
    for (let arrayRoamer = 0; arrayRoamer < numbersArray.length; arrayRoamer += 1) {
        for (let numberCompare = 0; numberCompare < numbersArray.length - arrayRoamer; numberCompare += 1) {
            if (numbersArray[numberCompare] >= numbersArray[numberCompare + 1]) {
                const numberHolder = numbersArray[numberCompare + 1];
                numbersArray[numberCompare + 1] = numbersArray[numberCompare];
                numbersArray[numberCompare] = numberHolder;
            }
        }
    }
    numbersArray[numbersArray.length - 1] = `e ${numbersArray[numbersArray.length - 1]}`;
    return numbersArray;
}
console.log(`2. Os numeros ${numberSort(oddsAndEvens).join(', ')} se encontram ordenados de forma crescente!`);


oddsAndEvens.sort((a, b) => a - b)

console.log(oddsAndEvens.sort(function(a, b) { 
    return a - b;
}));

console.log(`4. Os numeros ${oddsAndEvens.sort((a, b) => a - b).join(', ')} se encontram ordenados de forma crescente!`);
