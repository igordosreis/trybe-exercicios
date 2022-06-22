// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar 
// um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma 
// função que checa se o número apostado é igual ao número sorteado. O retorno da 
// sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// const draw = (number) => number === Math.floor(Math.random() * 6) ? 'Parabéns você ganhou' : 'Tente novamente';


// const drawCheck = (number) => number === Math.floor(Math.random() * 6);
// const drawResult = (number, callback) => callback(number) ? 'Parabéns você ganhou' : 'Tente novamente';


const drawCheck = (number, draw) => number === draw;
const drawResult = (number, callback) => callback(number, Math.floor(Math.random() * 6)) ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(drawResult(5, drawCheck));
console.log(drawResult(5, drawCheck));
console.log(drawResult(5, drawCheck));
console.log(drawResult(5, drawCheck));
console.log(drawResult(5, drawCheck));
console.log(drawResult(5, drawCheck));

