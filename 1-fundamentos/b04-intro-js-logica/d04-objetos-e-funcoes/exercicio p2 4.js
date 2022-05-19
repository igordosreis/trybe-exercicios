// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

function biggestNameLenght(namesArray) {
    let lengthTest = namesArray[0].length;
    let nameIndex = 0;
    // console.log(lengthTest);
    for (let index in namesArray) {
        if (namesArray[index].length >= lengthTest) {
            lengthTest = namesArray[index].length;
            nameIndex = index;
            // console.log(lengthTest);
        }
    }
    return namesArray[nameIndex];
}
console.log(biggestNameLenght(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


function biggestNameLenght(namesArray) {
    let lengthTest = namesArray[0];
    for (let index in namesArray) {
        if (namesArray[index].length >= lengthTest.length) {
            lengthTest = namesArray[index];
        }
    }
    return lengthTest;
}
console.log(biggestNameLenght(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));



function biggestNameLenght(namesArray) {
    let lengthTest = namesArray[0].length;
    let name = '';
    // console.log(lengthTest);
    for (let index of namesArray) {
        if (index.length >= lengthTest) {
            lengthTest = index.length;
            name = index;
            // console.log(index);
        }
    }
    return name;
}
console.log(biggestNameLenght(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));



function biggestNameLenght(namesArray) {
    let lengthTest = namesArray[0];
    for (let index of namesArray) {
        if (index.length >= lengthTest.length) {
            lengthTest = index;
        }
    }
    return lengthTest;
}
console.log(biggestNameLenght(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));