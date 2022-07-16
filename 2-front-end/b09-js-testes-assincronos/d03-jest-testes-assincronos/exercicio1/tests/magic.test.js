require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    expect.assertions(1);
    const response = await getMagicCard('130550');
    const expected = 'Ancestor\'s Chosen';
    expect(response.name).toEqual(expected);
  });
  it('Verifica se getMagicCard é uma função', async () => {
    expect.assertions(1);
    const result = (typeof getMagicCard);
    const expected = 'function';
    expect(result).toEqual(expected);
  });
  it('Verifica se, ao chamar a função getMagicCard com o argumento "130550", a função fetch foi chamada', async () => {
    expect.assertions(1);
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalled();
  });
  it('Verifica se, ao chamar a função getMagicCard com o argumento "130550", a função fetch foi chamada com o endpoint "https://api.magicthegathering.io/v1/cards/130550"', async () => {
    expect.assertions(1);
    const url = 'https://api.magicthegathering.io/v1/cards/130550';
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Verifica se o retorno da função getMagicCard é igual ao objeto card', async () => {
    expect.assertions(1);
    const response = await getMagicCard('130550');
    const expected = card;
    expect(response).toEqual(expected);
  });
  it('Verifica se, ao chamar a função getMagicCard com o argumento \'idDesconhecido\', retorna um erro com a mensagem: "Id is not found!"', async () => {
    expect.assertions(1);
    const response = await getMagicCard('idDesconhecido');
    const expected = 'Id is not found!';
    expect(response).toEqual(new Error(expected));
  });
});
