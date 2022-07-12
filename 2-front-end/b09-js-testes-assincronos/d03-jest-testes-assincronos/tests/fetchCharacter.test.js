require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toEqual('Wonder Woman');
    // await expect(fetchCharacter('720')).resolves.toEqual({OBJETO RETORNADO});
    // A sintaxe com o await na mesma linha e logo antes do expect requer o uso do .resolves ou 
    // .rejects no caso de sucesso ou falha, respectivamente
  });
  it('Verifica se retorna erro ao executar a funcao sem parametro', async () => {
    const failRequest = await fetchCharacter();
    expect(failRequest).toEqual(new Error('You must provide an url'));
    // await expect(fetchCharacter()).resolves.toEqual(new Error('You must provide an url'));
  });
  it('Verifica se retorna \'Invalid id\' ao executar a funcao com parametro que nao existe', async () => {
    const response = await fetchCharacter('string');
    expect(response).toEqual('Invalid id');
    // await expect(fetchCharacter('string')).resolves.toEqual('Invalid id');
  });
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});