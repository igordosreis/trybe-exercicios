// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que 
// transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com 
// os falso-positivos em testes assíncronos.
const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
};

// test('Verificando a callback de uma funcao uppercase', (done) => {
//     uppercase('palavra', (result) => {
//         expect(result).toEqual('PALAVRA');
//         done();
//     });
// });

it('uppercase "test" to equal "TEST"', (done) => {
    uppercase('test', (str) => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
});