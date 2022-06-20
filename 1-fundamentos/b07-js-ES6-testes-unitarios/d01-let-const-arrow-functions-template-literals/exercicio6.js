const xChange = (nome) => {
    const frase =  'Tryber x aqui!';
    const newPhrase = frase.split(' ');
    newPhrase[1] = nome;
    return newPhrase.join(' ');
}
// console.log(xChange('teste'));

const addSkills = (xChangeReturn) => {
    const skills = ['Javascript', 'HTML', 'CSS'];
    let completePhrase = `
    ${xChangeReturn}
  
    Minhas três principais habilidades são:`;
    
    for (let skill of skills) {
        completePhrase = `${completePhrase}
        - ${skill}`;
    }
    // GABARITO
    // skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
    //     completePhrase = `${completePhrase}
    //   - ${skill}`;
    // }); // reatribui e adiciona a skill atual a variável resultado
    return completePhrase;
}
console.log(addSkills(xChange('teste')));