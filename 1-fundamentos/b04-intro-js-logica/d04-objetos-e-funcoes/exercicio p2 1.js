// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function pali(word) {
    let wordTest = '';
    let testStatus = false;
    for (i = word.length - 1; i >= 0 ; i -= 1) {
        wordTest = wordTest + word[i];
    }
    if (word === wordTest) {
        testStatus = true;
    }
    console.log(wordTest);
    return testStatus;
}
console.log(pali('arara'));
console.log(pali('desenvolvimento'));



function palif(word) {
    let wordTest = word.split('').reverse().join('');
    let testStatus = false;
    if (word === wordTest) {
        testStatus = true;
    }
    // console.log(wordTest);
    return testStatus;
}
console.log(palif('arara'));
console.log(palif('desenvolvimento'));

// Como nao 'encadear' funcoes diferentes
function paliff(word) {
    let wordTest = word;
    let w = wordTest.split('');
    let ww = w.reverse();
    let www = ww.join('');
    let testStatus = false;
    if (word === www) {
        testStatus = true;
    }
    console.log(wordTest);
    return testStatus;
}
console.log(paliff('arara'));
console.log(paliff('desenvolvimento'));



// Resolvendo com for in
function paliforin(word) {
    let wordTest = '';
    for (index in word) {
       wordTest = wordTest + word[(word.length -1) - index];;
       //(word.length -1): acessa o ultimo idice da palavra
       //word[(word.length -1) - index]: depois de acessar o ultimo indice da palavra, o '-index' dor for in percorre todos eles a partir do ultimo, um por um
    }
    if (word === wordTest) {
        return true
    } else {
        return false;
    }
}
console.log(paliforin('amor a roma'));



function paliforin(word){
    for(index in word){
        console.log(word[index]);
      if(word[index] != word[(word.length - 1) - index]){
          //nesse caso, a primeira letra diferente encerra o for in e retorna falso; nao deveriam existir letras diferentes num palindromo
          //se fosse feito com um 'if(word[index] != word[(word.length - 1) - index]) return true', o for in iria se encerrar na primeira letra igual e retornar verdadeiro, mesmo que a palavra nao seja palindromo e por isso essa solucao nao funciona
        return false;
      }
    }
    return true;
  }
  console.log(paliforin('desenvolvimentd'));