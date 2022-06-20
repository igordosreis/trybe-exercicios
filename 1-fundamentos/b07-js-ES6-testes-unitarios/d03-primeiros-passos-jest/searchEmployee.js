// Dados
const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
];
// console.log(professionalBoard[2].firstName)

const searchEmployee = (id, detail) => {
    // Implemente seu código aqui

    // Primeira versao
    // for (let index = 0; index < professionalBoard.length; index += 1) {
    //     if (Object.values(professionalBoard[index]).includes(id) && Object.keys(professionalBoard[index]).includes(detail)) {
    //         // return professionalBoard[index][`${detail}`];
    //         return professionalBoard[index][detail];
    //     }
    // }

    // for (let index = 0; index < professionalBoard.length; index += 1) {
    //     if (Object.values(professionalBoard[index]).includes(id)) {
    //         return 'Informação indisponível';
    //     }
    // }
    // return 'ID não identificada';

    // Segunda versao
    // Terceira versao, refatorada para usar throw new Error
    let result = '';
    for (let index = 0; index < professionalBoard.length; index += 1) {
        if (Object.values(professionalBoard[index]).includes(id)) {
        // if (currentEmployee.id === id) {
            result = professionalBoard[index];
        }
    }
    if (!result) {
        // return 'ID não identificada';
        throw new Error("ID não identificada");
    }
    if (!result[detail]) {
        // return 'Informação indisponível';
        throw new Error("Informação indisponível");
    }
    return result[detail];

    // Solucao para ordem errada
    // for (let entry of professionalBoard){
    //     // console.log(entry);
    //     if (Object.values(entry).includes(id) && Object.values(entry).join(', ').includes(detail)) {
    //         return entry;
    //     }
    // }
    // for (let entry of professionalBoard){
    //     // console.log(entry);
    //     if (Object.values(entry).includes(id)) {
    //         return 'Informação indisponível';
    //     }
    // }
    // return 'ID não identificada';
};

// console.log(searchEmployee('4678-2', 'firstName'))
// console.log(searchEmployee('4678-2', 'lastName'))
// console.log(searchEmployee('4678-2', 'specialities'))
// console.log(searchEmployee('4678-2', 'random'))
// console.log(searchEmployee('9999-9', 'lastName'))

module.exports = searchEmployee;


    // professionalBoard.forEach(entry => {
    //     if (Object.values(entry).includes(id)) {
    //         if (Object.values(entry).join(', ').includes(detail)) {
    //             console.log('entrou1');
    //             console.log(Object.values(entry));
    //             console.log(entry);
    //             return Object.values(entry);
    //         }
    //         console.log('entrou2');
    //         return 'Informação indisponível';
    //     }
    //     console.log('entrou3');
    //     return 'ID não identificada'
    // });