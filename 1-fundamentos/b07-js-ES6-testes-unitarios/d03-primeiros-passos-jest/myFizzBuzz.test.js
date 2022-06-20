const myFizzBuzz = require('./myFizzBuzz.js');

describe('Testa se o retorno da funcao myFizzBuzz esta correto', () => {
    it('de acordo com o argumento usado', () => {
        expect(myFizzBuzz(75)).toEqual('fizzbuzz');
        expect(myFizzBuzz(27)).toEqual('fizz');
        expect(myFizzBuzz(25)).toEqual('buzz');
        expect(myFizzBuzz(13)).toEqual(13);
        expect(myFizzBuzz('13')).toBeFalsy();
        expect(myFizzBuzz('13')).toEqual(false);
    });
});