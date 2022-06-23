const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades(group) {
    group.forEach((student) => {
      if (student.grade >= 60) {
        // students[index].approved = 'Aprovado'; // Nao é necessario usar o index aqui
        student.approved = 'Aprovado';
      } else {
        student.approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades(students);
  
  console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]




const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
  name = name.toUpperCase(); // Nao funciona
  name.toUpperCase(); // Nao funciona
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]




// Para fixar de .forEach()
// 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
  // Adicione seu código aqui

emailListInData.forEach((email) => showEmailList(email));
emailListInData.forEach(showEmailList);

// const displayEmails = (list, item, callback) => {
//     list.forEach((item) => callback(item));
// }
// displayEmails(emailListInData, showEmailList);




// Para fixar de .find()
// 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

console.log(numbers.find((number) => !(number % 3) && !(number % 5)));
console.log(numbers.find(number => !(number % 3) && !(number % 5)));

const findDivisibleBy3And5 = (arr) => {
  // Adiciona seu código aqui
  return arr.find((number) => !(number % 3) && !(number % 5));
}

console.log(findDivisibleBy3And5(numbers));


// 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names1 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (arr) => {
  // Adicione seu código aqui:
  return arr.find((name) => name.length === 5);
}

console.log(findNameWithFiveLetters(names1));


// 3 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
  
function findMusic(id) {
    // Adicione seu código aqui
    return musicas.find((music) => music.id === id);
    // return musicas.find(music => music.id === id); // Tambem funciona
}
  
console.log(findMusic('31031685'));



// Para fixar de .some() e .every()
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false


// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nameItem) => nameItem === name);
}

console.log(hasName(names2, 'Ana'))


// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
    return arr.every(person => person.age >= 18);
}
  
console.log(verifyAges(people, 18));




// Para fixar de .sort()
// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const people1 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui

const ageUp = people1.sort((a, b) => a.age - b.age);
const ageDown = people1.sort((a, b) => b.age - a.age);

console.log(ageUp);
console.log(ageDown);