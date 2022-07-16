// // Com essa sintaxe, o objeto com os dados da API inicialmente só é acessível com 
// // o data.data do segundo .then. Entao, é necessário criar uma variável que receba o fetch
// // e entao retorna-la.
// const fetchCoins = () => {  
//     const data = fetch('https://api.coincap.io/v2/assets')
//       .then((response) => response.json())
//       .then((data) => data.data)
//       .catch((error) => error.toString());
//     return data;
// }
// fetchCoins();

// // Com essa sintaxe, os dados da API sao acessiveis pela variavel data.
// const fetchCoins = async () => {
//     try { 
//         const response = await fetch('https://api.coincap.io/v2/assets');
//         const data = await response.json();
//         return data.data;
//     } catch {
//         error.toString();
//     }
// }
// fetchCoins();

// // Sintaxe 'hibrida' do gabarito. Os dados da API sao acessiveis pela variavel coins.
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  return coins;
}
fetchCoins();

const getUsdConversor = async () => {
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json';
    const brlPriceList = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.usd)
        .catch((error) => error);
    return brlPriceList;
}

// // Para trabalhar com o retorno de fetchCoins, essa funcao tambem precisa ser assincrona.
const createTop10List = async () => { 
    const getCoins = await fetchCoins(); // A sintaxe fetchCoins().slice(0, 10) não funciona
    const brlPrice = await getUsdConversor();
    const ul = document.querySelector('ul');
    getCoins
        .slice(0, 10)
        // .filter((coin, index) => index < 10)
        .forEach((coin) => {
            const li = document.createElement('li');
            const usdPrice = Number(coin.priceUsd);
            li.innerText = `${coin.name} (${coin.symbol}): USD ${usdPrice.toFixed(3)} | BRL: ${(usdPrice * brlPrice.brl).toFixed(3)}`
            ul.appendChild(li);
        });
}
createTop10List();