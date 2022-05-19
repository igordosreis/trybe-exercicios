// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.
// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
    let plainVector;
    let evenVector = [];
    for (let arrayAssembly = 0 ; arrayAssembly < vector.length ; arrayAssembly += 1) {
        plainVector = vector[arrayAssembly];

        // if (arrayIndex % 2 == 0){
        //     evenVector.push(arrayIndex);
        //     console.log(evenVector);
        // }
    }
    // return evenVector;
    console.log(plainVector);
}

console.log(arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]]));


