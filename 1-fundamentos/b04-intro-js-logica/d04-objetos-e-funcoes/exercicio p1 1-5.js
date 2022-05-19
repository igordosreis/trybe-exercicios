// 1 - 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// Bem-vinda, Margarida

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log('Bem vinda,', info.personagem);


// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info.recorrente = 'Sim';
console.log(info);


// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
//personagem
//origem
//nota
//recorrente

for (let i in info) {
    console.log(i);
}


// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (let ii in info) {
    console.log(info[ii]);
}


// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let infoDois = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for (values in info) {
    if (values === 'recorrente' && info[values] === 'Sim' && infoDois[values] === 'Sim') {
 // if (info[values] === infoDois[values]) {
        console.log('Ambos recorrentes')
    } else {
    console.log(info[values], 'e', infoDois[values]);
    }
}