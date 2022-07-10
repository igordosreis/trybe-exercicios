const fetch = require('node-fetch');

// O codigo abaixo somente retorna `Promise { <pending> }` 
// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// O codigo abaixo funciona e consegue lidar com erros de requisicao
// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev'; // Para funcionar
// //   const url = 'api.chucknorris.io/jokes/random?category=dev'; // Para nao funcionar e ir pro .catch
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

// Versao com async e await; somente async nao muda o funcionamento em nada em relacao a versao anterior
// const fetchJoke = async () => {
//     const url = 'https://api.chucknorris.io/jokes/random?category=dev';
  
//     const result = await fetch(url)
//       .then((response) => response.json())
//       .then((data) => data.value)
//       .catch((error) => `Algo deu errado :( \n${error}`);
  
//     console.log(result);
//   };

// Versao usando async, await, try e catch
const fetchJoke = async () => { // async marca a funcao como assincronca
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    try { // codigo a ser executado, com o retorno em caso de sucesso
      const response = await fetch(url); // await mostra que essa resposta deve ser esperada (senao fica como Pending)
      const data = await response.json();
      console.log(data.value);
    } catch(error) { // codigo para pegar o erro em caso de falha na execucao
      console.log(`Algo deu errado :( \n${error}`);
    }
}

fetchJoke();