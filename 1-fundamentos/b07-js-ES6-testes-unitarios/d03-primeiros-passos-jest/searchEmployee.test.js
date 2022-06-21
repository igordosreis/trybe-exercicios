const searchEmployee = require('./searchEmployee.js');

describe('Testa se a funcao searchEmployee', () => {
    it('existe', () => {
        expect(searchEmployee).toBeDefined();
    });

    it('seja do tipo funcao', () => {
        expect(typeof searchEmployee).toEqual('function');
    });

    it('retorna o funcionario corretamente baseado nos argumentos fornecidos', () => {
        expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana');
        expect(searchEmployee('5569-4', 'lastName')).toEqual('Jobs');
        expect(searchEmployee('1256-4', 'specialities')).toContain('Hooks', 'Context API', 'Tailwind CSS');
        
        // Solucao para ordem errada
        // expect(searchEmployee('8579-6', 'firstName')).toEqual({
        //     id: '8579-6',
        //     firstName: 'Ana',
        //     lastName: 'Gates',
        //     specialities: ['UX', 'Design'],
        //   });
        // expect(searchEmployee('5569-4', 'Jobs')).toEqual({
        //     id: '5569-4',
        //     firstName: 'George',
        //     lastName: 'Jobs',
        //     specialities: ['Frontend', 'Redux', 'React', 'CSS'],
        // });
        // expect(searchEmployee('4678-2', 'Backend')).toEqual({
        //     id: '4678-2',
        //     firstName: 'Paul',
        //     lastName: 'Dodds',
        //     specialities: ['Backend'],
        // });
    });

    it('retorna "Informação indisponível" caso a informacao nao exista', () => {
        // Segunda versao
        // expect(searchEmployee('8579-6', 'random')).toEqual('Informação indisponível');

        // Terceira versao, refatorada para usar throw new Error
        expect(() => {searchEmployee('8579-6', 'random').toThrowError(new Error('Informação indisponível'))});
        
        // Solucao para ordem errada
        // expect(searchEmployee('8579-6', 'Jobs')).toEqual('Informação indisponível');
    });

    it('retorna "ID não identificada" caso a ID nao exista', () => {
        // Segunda versao
        // expect(searchEmployee('9999-9', 'Jobs')).toEqual('ID não identificada');

        // Terceira versao, refatorada para usar throw new Error
        expect(() => {searchEmployee('9999-9', 'Jobs').toThrowError(new Error('ID não identificada'))});
    });
});