let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplied = [];

for (i = 0 ; i < numbers.length ; i += 1) {
    if(i + 1 === numbers.length) {
        multiplied.push(numbers[i] * 2)
    } else {
        multiplied.push(numbers[i] * numbers[i + 1])
    }

}
console.log(multiplied);