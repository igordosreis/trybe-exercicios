import React from 'react';

class About extends React.Component {
  render() {
    const skills = ["HTML", 'Javascript', 'CSS'] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return (
      <div>
        <h1>Igor</h1>
        <p>Estudante de desenvolvimento web</p>
        <h2>Minhas Habilidades</h2>
        <ul>{ jsxSkills }</ul>
      </div>
    );
  }
}

export default About;