
// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];
  
function flatten(arr) {
    // escreva seu código aqui
    // return [...arr[0], ...arr[1], ...arr[2]]; // Teste usando spread operator, funciona
    return arr.reduce((acc, cur, index) => {
        // console.log(`Acc: ${acc} ${Array.isArray(acc)} | Cur: ${cur} ${Array.isArray(cur)} | Index: ${index}`);
        return acc.concat(cur);
    }, []); // Caso o valor inicial declarado seja um array vazio, o primeiro cur sera o array ['1', '2', '3'] 
    // que sera concatenado no array vazio. Caso o valor inicial nao seja declarado, o primeiro acc
    // sera o array ['1', '2', '3'] e o primeiro cur, o array [true], sera concatenado em acc
}
console.log(`Exercicio 1:
${flatten(arrays)}
Array.isArray: ${Array.isArray(flatten(arrays))}
`);


// Exercícios 2, 3 e 4

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
];
  
  // Adicione o código do exercício aqui:

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames(arr) {
  // escreva seu código aqui
    const getNames = (acc, cur, index, array) => {
        // console.log(`Acc: ${acc.author.name} | Cur: ${cur.author.name} | `); // Index: ${index}
        if (index < array.length - 1) {
            acc.author.name = `${acc.author.name}, ${cur.author.name}`;
            // console.log(`Acc: ${acc.id} | Cur: ${cur.id} | Index: ${index}`);
            return acc;
            // return `${acc} ${cur.author.name},`;
        }
        else {
            acc.author.name = `${acc.author.name}, ${cur.author.name}.`;
            return acc;
            // return `${acc} ${cur.author.name}.`;
        }
    };
    return arr.reduce(getNames).author.name;
    // return arr.reduce(getNames, '').trim(); 

    // GABARITO
    // const names = books.reduce((acc, cur, index, array) => {
    //     if (index === array.length - 1) return `${acc} ${cur.author.name}.`;
    //     return `${acc} ${cur.author.name},`;
    //   }, '');
    //   return names.trim();
    // No primeiro passo, o acumulador é uma string vazia, que recebe ele mesmo (uma string vazia)  
    // e uma string contendo o valor da chave author.name de cur (cur.author.name). Entao, o acc é
    // retornado. Como ele ja era uma string inicialmente, ele receber outra string nao é um problema
    // e o .reduce vai retornar uma string. Como a string inicial vazia gerou um espaco vazio no comeco,
    // o .trim() é usado para eliminar esse espaco.
    // Ja na minha solucao, como eu nao defini o acc, por default o acc é SEMPRE o primeiro objeto inteiro 
    // do array, e o que eu fiz é alterar a chave acc.author.name com o valor do proximo objeto. Por isso, 
    // o .reduce retorna o objeto inteiro e entao eu preciso de adicionar um .author.name apos o .reduce 
    // para acessar o valor acumulado nessa chave.
}
console.log(`Exercicio 2:
${reduceNames(books)}
`);


// 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// const averageAge = (arr) => arr.reduce((total, age) => total + (age.releaseYear - age.author.birthYear), 0) / arr.length; // Em uma linha
const averageAge = (arr) => {
    const ageSum = (total, age) => total + (age.releaseYear - age.author.birthYear);
    return (arr.reduce(ageSum, 0) / arr.length); // Passando a callback numa variavel separada

    // return arr.reduce((total, age) => total + (age.releaseYear - age.author.birthYear), 0) / arr.length;
}
console.log(`Exercicio 3:
${averageAge(books)}
`);


// 4- Encontre o livro com o maior nome.

function longestNamedBook(arr) {
    // escreva seu código aqui
    const getLongestBookName = (longest, cur) => (longest.name.length > cur.name.length) ? longest : cur;
    return arr.reduce(getLongestBookName) 
    // return arr.reduce(getLongestBookName, arr[0].name.length) 
}
console.log(`Exercicio 4:`);
console.log(longestNamedBook(books));

// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
// const containsA = (arr) => arr.reduce((total, word) => total + word.toLowerCase().split('').filter((element) => element === 'a').length, 0); // Em uma linha
function containsA(arr) {
    // escreva seu código aqui
    const getAllAs = (total, word) => {
       return total + word.toLowerCase().split('').filter((element) => element === 'a').length;
    }
    return arr.reduce(getAllAs, 0);
}

// GABARITO
// function containsA() {
//     return names.reduce((acc, curr) =>
//        acc + curr.split('').reduce((acumulator, current) => {
//           if (current === 'a' || current === 'A') return acumulator + 1;
//           return acumulator;
//        }, 0), 0);
// }
console.log(`
Exercicio 5:
${containsA(names)}
`);

// const teste = 'palavra';
// console.log(teste.split('').filter((element) => element === 'a'));
// console.log([...teste].filter((element) => element === 'a'));
// console.log(Array.from(teste).filter((element) => element === 'a'));



// 6.**- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada 
// objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir 
// que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui além de reduce será 
// necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, 
// e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(studentsArray, gradesArray) {
  // escreva seu código aqui
  const studentsObjArray = studentsArray.map((student, index) => ({
    name: student,
    average: (gradesArray[index].reduce((total, grade) => total + grade, 0) / gradesArray[index].length),
  }));
  return studentsObjArray;
}
console.log(`Exercicio 6:`);
console.log(studentAverage(students, grades));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];