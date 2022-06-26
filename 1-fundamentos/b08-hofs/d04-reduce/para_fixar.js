// Funcao que retorna o maior valor de um array
const numbers = [5, 7, 9, 2, 11, 1, 4]

const findBiggestWithFor = (arr) => {
    let biggestNumber = arr[0];
    for (let number of arr) {
        if (number >= biggestNumber) biggestNumber = number;
    }
    return biggestNumber;
}
console.log(findBiggestWithFor(numbers));


const findBiggestWithReduce = (arr) => {
    return arr.reduce((biggest, current) => {
        if (biggest > current) return biggest;
        else return current;
    })
}
console.log(findBiggestWithReduce(numbers));


const findBiggestWithReduce1 = (arr) => 
arr.reduce((biggest, current) => ((biggest > current) ? biggest : current), 0); //Esse 0 nao é ncessario
console.log(findBiggestWithReduce1(numbers));



// Faça uma função que some todos os números pares do array

const numbers1 = [ 18, 19, 23, 53, 4, 5, 76, 23, 54 ];

const sumEvenWithReduceAndFilter = (arr) =>
arr.filter((number) => number % 2 === 0).reduce((acc, cur) => acc + cur);
console.log(sumEvenWithReduceAndFilter(numbers1));

const sumEvenWithReduce = (arr) =>
arr.reduce((acc, cur) => (cur % 2 === 0) ? acc + cur : acc);
// arr.reduce((acc, cur) => {
//     if (cur % 2 === 0) { 
//         return acc + cur
//     } else {
//         console.log(acc)
//         console.log(cur)
//         return acc;
//     }
// });
console.log(sumEvenWithReduce(numbers1));



// Crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, 
// para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você 
// usará tanto o map quanto, dentro dele, o reduce!

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
];

const studentBestSubject = (arr) => 
arr.map((student) => student.reduce((best, cur) => {
    if (best.materias.nota > cur.materias.nota) {
        const studentBest = {};
        studentBest.name = best.nome;
        studentBest.materia = best.materia.name;
        return studentBest;
    }
    else return cur.materias.nota;
}));
console.log(studentBestSubject(estudantes));