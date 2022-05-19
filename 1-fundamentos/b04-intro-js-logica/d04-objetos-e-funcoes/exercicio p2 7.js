// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true

// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false



function wordEndTest(word, ending) {
    if (ending.length > word.length) {
        console.log('A palavra precisa ser maior do que o final da palavra');
        return ending;
    }
    let wordReversed = word.split('').reverse();
    let endingReversed = ending.split('').reverse(); // nao é necessário usar um .join(''); no final porque comparar arrays gera o mesmo resultado

    for (letterRoamer = 0 ; letterRoamer < endingReversed.length ; letterRoamer += 1) {
        if (endingReversed[letterRoamer] != wordReversed[letterRoamer]) {
            return false;
        }
    }
    return true;
}
console.log(wordEndTest('trybe', 'be'));
console.log(wordEndTest('joaofernando', 'fernan'));
console.log(wordEndTest('joaofernando', 'fernanaaaaaaaaaaaaaaaaaaa'));
