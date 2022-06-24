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

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
//    Dica: use a função find.

console.log(books.find(book => book.author.birthYear === 1947).author.name);

const findFirstByYear = (arr, year) => arr.find(book => book.author.birthYear === year).author.name;
console.log(findFirstByYear(books, 1947));


// 2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach.

// let smallName = books[0].name;
// const smallestName = books.forEach((book) => {
//     if (book.name.length <= smallName.length) {
//         smallName = book.name;
//     }
// });
// console.log(smallName);

const smallestBookName = (arr) => {
    let smallName1 = arr[0].name;
    arr.forEach(book => {
        if (book.name.length <= smallName1.length) smallName1 = book.name;
    });
    return smallName1;
};
console.log(smallestBookName(books));

const smallestBookName1 = (arr) => {
    arr.sort((a, b) => a.name.length - b.name.length);
    return arr[0].name;
}
console.log(smallestBookName1(books));


// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook(arr) {
    // escreva seu código aqui
    return arr.find(book => book.name.length === 26).name;
}
console.log(getNamedBook(books));


// 4 - Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc(arr) {
    // escreva aqui seu código
    return arr.sort((a, b) => b.releaseYear - a.releaseYear);
}
// console.log(booksOrderedByReleaseYearDesc(books));


// 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX(arr) {
    // escreva seu código aqui
    return arr.every(book => book.author.birthYear >= 1901 && book.author.birthYear <= 2000);
}
console.log(everyoneWasBornOnSecXX(books));


// 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

function someBookWasReleaseOnThe80s(arr) {
    // escreva seu código aqui
    return arr.some(book => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}
console.log(someBookWasReleaseOnThe80s(books));


// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

function authorUnique(arr) {
    // escreva seu código aqui
    let aux = null;
    arr.sort((a, b) => {
        if (a.author.birthYear === b.author.birthYear) {
            aux = false;
            return aux;
        }
        return a.author.birthYear - b.author.birthYear
    })
    return aux;
}
console.log(authorUnique(books));

// GABARITO
// function authorUnique() {
//     return books.every((book) =>
//       !books.some((bookSome) =>
//         (bookSome.author.birthYear === book.author.birthYear)
//         && (bookSome.author.name !== book.author.name)));
// }