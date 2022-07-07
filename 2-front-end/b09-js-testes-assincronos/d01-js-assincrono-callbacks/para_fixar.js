// CALLBACKS

// Definição da função userFullName
const userFullName1 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
const getUser1 = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
getUser1(userFullName1);


const userFullName2 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality2 = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser2 = (fn) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Insira o retorno da função `getUser`
  return fn(userToReturn);
};

console.log(getUser2(userFullName2)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser2(userNationality2)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"


const userFullName3 = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality3 = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser3 = (fn) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(fn(user));
  }, delay());
};

getUser3(userFullName3); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser3(userNationality3); // deve imprimir "Ivan is Russian" depois de um certo tempo



// LIDANDO COM ERROS EM OPERACOES ASSINCRONAS

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay1 = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess, printErrorMessage) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
      printErrorMessage(errorMessage);
    }
  }, delay1());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);



// TESTES ASSINCRONOS COM CALLBACKS

