// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas 
// corretas (Gabarito), o segundo será um array de respostas a serem verificadas 
// (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas 
// estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
// Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 
// 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const verifier = (correctAnswersArr, studentAnswersArr) => {
//     let points = 0;
//     let correctAnswers = 0;
//     for (let index = 0; index <correctAnswersArr.length; index += 1) {
//         // console.log(studentAnswersArr.length);
//         if (studentAnswersArr[index] === correctAnswersArr[index]) {
//             points += 1;
//             correctAnswers += 1;
//         }
//         if (studentAnswersArr[index] !== correctAnswersArr[index] && studentAnswersArr[index] !== 'N.A') {
//             points -= 0.5;
//         }
//     }
//     return `Total de pontos: ${points}. Total de resposta corretas: ${correctAnswers}`;
// }

// const evaluator = (correctAnswersArr, studentAnswersArr, verifier) => verifier(correctAnswersArr, studentAnswersArr);


const verifier = (correctAnswers, studentAnswers) => {
    if (studentAnswers === correctAnswers) return 1;
    if (studentAnswers === 'N.A') return 0;
    return -0.5;
}

const evaluator = (correctAnswersArr, studentAnswersArr, verifier) => {
    let points = 0;
    for (let index in correctAnswersArr) {
        points += verifier(correctAnswersArr[index], studentAnswersArr[index])
    }
    return `Pontuacao total: ${points}.`
}

console.log(evaluator(RIGHT_ANSWERS, STUDENT_ANSWERS, verifier));
