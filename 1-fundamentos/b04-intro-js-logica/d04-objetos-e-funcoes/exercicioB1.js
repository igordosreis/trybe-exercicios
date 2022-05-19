// let I = { 
//     num: 1,
// };

// let V = { 
//     num: 5,
// };

// let X = { 
//     num: 10,
// };

// let L = { 
//     num: 50,
// };

// let C = { 
//     num: 100,
// };

// let D = { 
//     num: 500,
// };

// let M = { 
//     num: 1000,
// };

// console.log(C[0].num);

function romanToArabic(romanNumber) {
    let I = { 
        num: 1,
    };
    
    let V = { 
        num: 5,
    };
    
    let X = { 
        num: 10,
    };
    
    let L = { 
        num: 50,
    };
    
    let C = { 
        num: 100,
    };
    
    let D = { 
        num: 500,
    };
    
    let M = { 
        num: 1000,
    };

    inversedRomanNumber = romanNumber.split('').reverse();
    console.log(romanNumber);
    console.log(inversedRomanNumber);
        for (let currentNumber of inversedRomanNumber) {
            console.log(currentNumber);
            // console.log(inversedRomanNumber[(currentNumber - 1)]);
            // if (currentNumber <= inversedRomanNumber.length) {

            // }
        }
        console.log('aaaaaaa');
        for (let currentNumber of romanNumber) {
            console.log(currentNumber);
            // console.log(inversedRomanNumber[(currentNumber - 1)]);
            // if (currentNumber <= inversedRomanNumber.length) {

            // }
        }
        console.log('aaaaaaa');
}

console.log(romanToArabic('MCMLXXXVI'));

// for (index = 0 ; index < inversedRomanNumber.length ; index += 1) {
//     if (i <= romanNumber.length - 2){
//         if ()
//     }
// }



// n 1 2 3 4 5
// i 0 1 2 3 4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let multiplied = [];

// for (i = 0 ; i < numbers.length ; i += 1) {
//     if(i + 1 === numbers.length) {
//         multiplied.push(numbers[i] * 2)
//     } else {
//         multiplied.push(numbers[i] * numbers[i + 1])
//     }

// }
// console.log(multiplied);