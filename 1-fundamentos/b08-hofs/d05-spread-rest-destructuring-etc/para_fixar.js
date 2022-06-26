// SPREAD OPERATOR
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76
console.log(...patientInfo); // 60 1.7
console.log(patientInfo); // [ 60, 1.7 ]


const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.max(57, 8, 5, 800, 152, 74, 630, 98, 40)); // 800
console.log(Math.max([57, 8, 5, 800, 152, 74, 630, 98, 40])); // NaN
console.log(Math.min(...randomNumbers)); // 5


const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
  };
  
  const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
  };
  
  const customer = { ...people, ...about };
//   const customer = [ ...people, ...about ]; // Nao funciona
  console.log(customer); /* {
    id: 101,
    name: 'Alysson',
    age: 25,
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer'
  } */


// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você 
// desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e 
// additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa 
// salada de frutas usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['tomate', 'milho', 'pepino'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['bacon', 'carne', 'alho'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));



// REST

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88



// OBJECT DESTRUCTURING

// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      name: 'Tatooine',
    //   name1: 'Tatooine',
      population: '200000',
    },
};
  
  // desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
//   const { name, age, homeWorld: { name1 }, description: { jedi } } = character;
  
  // imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${name1} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);



const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
};
  
const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']
  
const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']



const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
  };
  
const { a: nome, b: classAssigned, c: subject } = student;
  
console.log(nome); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática




// PARA FIXAR - Object Destructuring
// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com 
// informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. 
// Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. 
// Para isso, utilize o spread operator.

const user = {
    firstName: 'Maria',
    currentAge: 21,
    nationality: 'Brazilian',
};
  
const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const fullInfo = {...user, ...jobInfos};
console.log(fullInfo);

const { firstName, currentAge, nationality, profession, squad, squadInitials } = fullInfo
console.log(`Hi, my name is ${firstName}, I'm ${currentAge} and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials} ${squad}.`);



// PARA FIXAR - Array Destructuring
// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher 
// a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [greeting1, greeting2] = saudacoes;
greeting2(greeting1);


// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da 
// desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
console.log(comida, animal, bebida); // arroz gato água


// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. 
// Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;  // [6, 8, 10, 12];
// [,,,, ...numerosPares] = numerosPares;  // [8, 10, 12];
// [,,,, ...numerosPares] = numerosPares;  // [10, 12];

console.log(numerosPares); // [6, 8, 10, 12];