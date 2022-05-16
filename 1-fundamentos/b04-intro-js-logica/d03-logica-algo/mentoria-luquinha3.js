let contadorDeDivisores = 0;
let maxNumber = 150;
for (index = 1; index <= maxNumber; index += 1) {
    if (index %3 == 0) {
        contadorDeDivisores += 1;
    };
};
if ( contadorDeDivisores >= 50) {
    console.log('Há 50 ou mais números diviseis por 3');
} else {
    console.log('Sequência muito pequena.');
}
