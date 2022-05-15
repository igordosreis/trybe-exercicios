let age = 20;
let sex = 'M';
let weight = 177;
let height = 77;

if (age > 0) {
    //Esse segundo if else poderia ser substituido por um switch case para M e F.
    if (sex === 'M'){
        console.log('A taxa metabolica é:' + ((height * 6.25) + (weight * 9.99) - (age * 4.92) + 5) + 'kcal.')
    }
    else {
        console.log('A taxa metabolica é:' + ((height * 6.25) + (weight * 9.99) - (age * 4.92) - 161) + 'kcal.')
    } 
} else {
    console.log('Idade invalida.')
}