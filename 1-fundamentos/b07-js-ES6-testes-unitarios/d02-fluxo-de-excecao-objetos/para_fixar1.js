// para praticar, crie uma função que receba três parâmetros, sendo eles: 
// um objeto, o nome de uma chave e o seu valor. 
// O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.


const addKeyAndValue = (object, key, value) => object[key] = value;

const burger = {
    meat: 'yes, please',
    bacon: 'obligatory',
    buns: 'healthy carbs',
};

addKeyAndValue(burger, 'addOns', 'more bacon');
console.log(burger);
// Funciona



const addKeyAndValue = (object, key, value) => object[key] = value;

const burger = {
    meat: 'yes, please',
    bacon: 'obligatory',
    buns: 'healthy carbs',
};

const addOns = 'addMoreStuff';

addKeyAndValue(burger, addOns, 'more bacon');
console.log(burger);
// Funciona



const addKeyAndValue = (object, key, value) => object[key] = value;

const burger = {
    meat: 'yes, please',
    bacon: 'obligatory',
    buns: 'healthy carbs',
};

const addOns = 'addMoreStuff';
const addMoreStuff = 'more bacon';

addKeyAndValue(burger, addOns, addMoreStuff);
console.log(burger);
// Funciona



const addKeyAndValue = (object, key, value) => object.key = value;

const burger = {
    meat: 'yes, please',
    bacon: 'obligatory',
    buns: 'healthy carbs',
};

addKeyAndValue(burger, 'addOns', 'more bacon');
console.log(burger);
// Nao funciona: adiciona uma key com nome `key` e o valor `more bacon`, pois uma string nao pode ser
// usada na notacao de objeto com nomeDoObjeto.nomeDaNovaChave



const addKeyAndValue = (object, key, value) => object.key = value;

const burger = {
    meat: 'yes, please',
    bacon: 'obligatory',
    buns: 'healthy carbs',
};

addKeyAndValue(burger, addOns, 'more bacon');
console.log(burger);
// Nao funciona, pois addOns nao foi definido previamente; ele precisa ser declarado como uma variavel
// Mesmo que eu declare `const addOns = 'addMoreStuff';` antes, o nome chave sera `key`, pois addOns é uma string
// como no caso anterior



const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  customer[newKey] = lastName;
//   newKey = 'fullName';
//   const fullName = `${customer.firstName} ${customer.lastName}`;
//   customer[newKey] = fullName;
  console.log(customer);
