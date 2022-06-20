const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};


// 1. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. 
const addKeyAndValue = (obj, key, value) => obj[key] = value;
addKeyAndValue(lesson2, 'turno', 'noite')
console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. 
// const listKeys = (obj) => console.log(Object.keys(obj));
// listKeys(lesson3);
const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson3));

// 3. Crie uma função para mostrar o tamanho de um objeto. 
const objLength = (obj) => listKeys(obj).length;
console.log(objLength(lesson3));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. 
const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson1));

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3}); // Essa sintaxe tambem funciona
console.log(allLessons);
// console.log(Object.keys(allLessons).length);
// console.log(allLessons['lesson1']['numeroEstudantes']);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. 
const totalStudents = (obj) => {
    let total = 0;
    // for (let lesson in obj) {
    //     // console.log(lesson);
    //     console.log(obj[`${lesson}`]);
    //     total += obj[`${lesson}`]['numeroEstudantes'];
    // }

    for (let index = 0; index < Object.keys(obj).length; index += 1) {
        console.log
        total += obj[`${Object.keys(obj)[index]}`]['numeroEstudantes'];
    }

    // GABARITO
    // const array = Object.keys(obj);
    // for (index in array) {
    //   total += obj[array[index]].numeroEstudantes;
    // }

    return total;
}
console.log(totalStudents(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo: 
const getValueByNumber = (obj, number) =>  Object.values(obj)[number];
console.log(getValueByNumber(lesson1, 0));

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: 
const verifyPair = (obj, key, value) => Object.entries(obj).join(', ').includes(`${key},${value}`); // Como é um objeto, no lugar do .join(', '), seria mais adequado usar um JSON.stringify()
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'professor', 'Maria Clara'));
// Como é um objeto, no lugar do .join(', '), seria mais adequado usar um JSON.stringify()

// GABARITO
// const verifyPair = (obj, key, value) => {
//     const arr = Object.entries(obj);
//     let isEqual = false;
//     for (let index in arr) {
//       if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
//     }
//     return isEqual;
// };
// console.log(verifyPair(lesson2,'professor','Carlos'));


// BONUS
// 1.  🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5. 

const mathStudents = (obj) => {
    const keysArray = Object.keys(obj);
    let total = 0;
    for (let index = 0; index < keysArray.length; index += 1) {
        if (obj[`${keysArray[index]}`].materia === 'Matemática') {
            total += obj[`${keysArray[index]}`].numeroEstudantes;
        }
    }

    // GABARITO
    // for (index in keysArray) {
    //     if(obj[array[index]].materia === 'Matemática'){
    //         total += obj[array[index]].numeroEstudantes;
    //     }
    // }

    // for (lesson of keysArray) {
    //     if(obj[lesson].materia === 'Matemática'){
    //         total += obj[lesson].numeroEstudantes;
    //     }
    // }

    return total;
}
console.log(mathStudents(allLessons));
// console.log(allLessons.lesson1.materia);
// console.log(Object.entries(allLessons)[0][0]);
// console.log(Object.keys(allLessons)[1]);
// console.log(Object.values(allLessons));

// 2. 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: 

const teacherReport = (obj, name) => {
    const keysArray = Object.keys(obj);
    let total = 0;
    let classesArray = [];
    const report = {};
    for (let index = 0; index < keysArray.length; index += 1) {
        if (obj[`${keysArray[index]}`].professor === name) {
            classesArray.push(obj[`${keysArray[index]}`].materia);
            total += obj[`${keysArray[index]}`].numeroEstudantes;
        }
    }

    // for (let lesson in keysArray) {
    //     if(obj[keysArray[lesson]].professor === name){
    //         classesArray.push(obj[keysArray[lesson]].materia);
    //         total += obj[keysArray[lesson]].numeroEstudantes;
    //     }
    // }

    // for (let lesson of keysArray) {
    //     if(obj[lesson].professor === name){
    //         classesArray.push(obj[lesson].materia);
    //         total += obj[lesson].numeroEstudantes;
    //     }
    // }

    report.professor = name;
    report.aulas = classesArray;
    report.estudantes = total;

    return report;
}
console.log(teacherReport(allLessons, 'Maria Clara'));
console.log(teacherReport(allLessons, 'Carlos'));

console.log(Object.entries(allLessons));
console.log(Object.keys(allLessons));
console.log(Object.values(allLessons));

console.log(Object.entries(allLessons).join(', '));
console.log(Object.keys(allLessons).join(', '));
console.log(Object.values(allLessons).join(', '));

console.log(Object.entries(allLessons)[0][0]);
console.log(Object.entries(allLessons)[0][1]);
console.log(Object.entries(allLessons)[0][1].turno);
console.log(Object.entries(allLessons)[0][1]['turno']);

console.log(lesson1);
console.log(Object.entries(lesson1).join(', '));
