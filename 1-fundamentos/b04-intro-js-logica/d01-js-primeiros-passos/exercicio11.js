let grossSalary = 10000;
let afterINSS;
let taxIR;
// let netSalary;

if (grossSalary <= 0) {
    console.log('ERROR');
}
else if (grossSalary > 5189.82) {
    afterINSS = grossSalary - 570.88; 
}
else if (grossSalary >= 2594.93) {
    afterINSS = grossSalary * 0.89;
}
else if (grossSalary >= 1556.95) {
    afterINSS = grossSalary * 0.91;
}
else (afterINSS = grossSalary * 0.92);


if (afterINSS > 4664.68) {
    taxIR = (afterINSS * 0.275) - 869.36;
    // console.log(afterINSS - taxIR);
}
else if (afterINSS > 3751.06) {
    taxIR = (afterINSS * 0.225) - 636.13;
    // console.log(afterINSS - taxIR);
}
else if (afterINSS > 2826.66) {
    taxIR = (afterINSS * 0.15) - 354.8;
    // console.log(afterINSS - taxIR);
}
else if (afterINSS > 1903.99) {
    taxIR = (afterINSS * 0.075) - 142.8;
    // console.log(afterINSS - taxIR);
}
else (console.log(afterINSS))

// console.log(afterINSS);

console.log(afterINSS - taxIR);