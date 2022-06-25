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

// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

const bookInfoDisplay = (arr) => arr.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
console.log(bookInfoDisplay(books));


// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map, sort

const authorByAge = (arr) => 
arr.sort((a, b) => (a.releaseYear - a.author.birthYear) - (b.releaseYear - b.author.birthYear)).
map((book) => ({ 
    age: (book.releaseYear - book.author.birthYear), 
    author: book.author.name
}));
console.log(authorByAge(books));


//  3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

const booksByFantasyOrSciFi = (arr) =>
arr.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
// console.log(booksByFantasyOrSciFi(books));

const booksByGenre = (arr, genre1, genre2) =>
arr.filter((book) => book.genre === genre1 || book.genre === genre2);
console.log(booksByGenre(books, 'Fantasia', 'Ficção Científica'));


// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const booksOver60 = (arr) =>
arr.filter((book) => (2022 - book.releaseYear) >= 60).
sort((a, b) => (2022 - b.releaseYear) - (2022 - a.releaseYear));
console.log(booksOver60(books));


// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors(arr) {
    // escreva seu código aqui
    // return arr.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').
    return booksByFantasyOrSciFi(arr).
    map((book) => book.author.name).
    sort((a, b) => a - b);
}
console.log(fantasyOrScienceFictionAuthors(books));

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = (arr) => booksOver60(arr).map((book) => book.name);
// const oldBooks = (arr) => arr.filter((book) => (2022 - book.releaseYear) >= 60).
// map((book) => book.name);
console.log(oldBooks(books));


//  7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const authorWith3DotsOnName = (arr) => arr.find((book) => /.\. .\. .\./i.test(book.author.name));
// const authorWith3DotsOnName = (arr) => arr.find((book) => {
    // const regEx = /.\. .\. .\./i;
    // const regEx = /.\. .\. .\./;
    // if (book.author.name.match(regEx)); return true; // Nao funciona
    // return regEx.test(book.author.name); // Funciona com uma das duas declaracoes de regEx
    // return /.\. .\. .\./i.test(book.author.name); // Funciona solo
// });
console.log(authorWith3DotsOnName(books));

// Testador de regEx
// function useRegex(input) {
//     let regex = /.\. .\. .\./i;
//     return regex.test(input);
// }
// console.log(useRegex('J. R. R. Tolkien'))