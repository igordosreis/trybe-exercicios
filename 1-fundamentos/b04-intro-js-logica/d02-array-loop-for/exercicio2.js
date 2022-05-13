let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = null; // se eu uso `let = sum;`, deixando sum como indefinido, o codigo nao funciona e retonar NaN

for (i = 0 ; i < numbers.length ; i += 1) {
    sum += numbers[i];
}

console.log(sum);