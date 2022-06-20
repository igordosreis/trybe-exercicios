const sum = require('./sum.js');

describe('Testa se a funcao sum retorna', () => {
    it('o resultado da soma', () => {
        expect(sum(2, 5)).toEqual(7);
        expect(sum(0, 0)).toEqual(0);
    });
    
    it('um erro caso um dos parametros seja uma string', () => {
        expect(() => {sum(4, '5').toThrow()});
    });

    it('a mensagem de erro "parameters must be numbers"', () => {
        expect(() => {sum(4, '5').toThrowError(new Error('parameters must be numbers'))});
    });
});

