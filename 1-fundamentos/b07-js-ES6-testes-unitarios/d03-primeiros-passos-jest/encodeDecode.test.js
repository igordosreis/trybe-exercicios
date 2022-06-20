const { encode, decode } = require ('./encodeDecode.js');

describe('Testa se a funcao encode e decode', () => {
    it('sao do tipo funcao', () => {
        expect(typeof encode).toEqual('function');
        expect(typeof decode).toEqual('function');
    })

    it('convertem os argumentos corretamente', () => {
        expect(encode('uaieo')).toEqual('51324');
        expect(decode('51324')).toEqual('uaieo');
        expect(encode('nbgth')).toEqual('nbgth');
        expect(decode('60978')).toEqual('60978');
    });
    
    it('mantem o tamanho das strings apos a conversao', () => {
        expect(encode('arara')).toHaveLength(5);
        expect(encode('arara').length).toEqual(5);
        expect(encode('1r1r1')).toHaveLength(5);
        expect(encode('1r1r1').length).toEqual(5);
    });
});