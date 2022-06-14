const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

for (let skill in student2) {
    console.log(`${skill}, Nivel: ${student2[skill]}`)
    // console.log(`${skill}, Nivel: ${student2.skill}`)
    // A sintaxe acima nao funciona
}

const readObject = (obj) => {
    for(let index = 0; index < Object.keys(obj).length; index += 1) {
        console.log(`${Object.keys(obj)[index]}, Nivel: ${obj[Object.keys(obj)[index]]}`);
        // console.log(`${Object.keys(obj)[index]}, Nivel: ${obj.Object.keys(obj)[index]}`);
        // A sintaxe acima nao funciona
    }
}
readObject(student1);
readObject(student2);
