// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.

function biggestIndex(arr) {
    let test = arr[0];
    for (i = 0 ; i <= arr.length ; i += 1) {
        if (arr[i] <= test) {
                test = arr[i];
        }
    }
    // console.log(test);
    return arr.indexOf(test);
}
console.log(biggestIndex([2, 4, 6, 7, 10, 0, -3]));



function biggestIndex(arr) {
    let test = arr[0];
    for (i = 0 ; i <= arr.length ; i += 1) {
        if (arr[i] <= test) {
                test = i;
        }
    }
    // console.log(test);
    return test;
}
console.log(biggestIndex([2, 4, 6, 7, 10, 0, -3]));



function biggestIndex(arr) {
    let test = arr[0];
    for (let index in arr) {
        if (arr[index] <= test) {
            test = index;
        }
    }
    return test;
}
console.log(biggestIndex([2, 4, 6, 7, 10, 0, -3]));
