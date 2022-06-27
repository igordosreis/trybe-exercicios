// Default Destructuring

const person1 = {
    name1: 'João',
    lastName1: 'Jr',
    age1: 34,
};
  
const { nationality1 = 'Brazilian' } = person1;
console.log(nationality1);



const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0



// Para Fixar
// Do jeito que está, quando passamos person para a função GetNationality o retorno é João 
// is undefined. Ajuste a função GetNationality para que a chamada GetNationality(person) 
// retorne João is Brazilian.
const getNationality = ({ firstName, nationality = 'Brazilian'  }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};
// const { nationality = 'Brazilian' } = person; // Nao funciona

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));



// Object Property Shorthand
// Para fixar

const getPosition = (latitude, longitude) => ({
    latitude, // sem shorthand: latitude: latitude,
    longitude}); // sem shorthand: longitude: longitude,
  
console.log(getPosition(-19.8157, -43.9542));



// Default Parameters

const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
    console.log(typeof userDisplay);
    console.log(`Welcome ${userDisplay}!`);
  };
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);
greeting(); // Welcome usuário!

// Para fixar

const multiply = (number, value = 1) => {
    // Escreva aqui a sua função
    return number * value;
};
  
console.log(multiply(8));


