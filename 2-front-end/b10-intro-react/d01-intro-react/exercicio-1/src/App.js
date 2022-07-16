import React from 'react';
import './App.css';

const Task = (value) => <li key={value}>{value}</li>;

const tasks = ['treinar', 'comer', 'estudar'] 

class App extends React.Component {
  render() {
    return (
      <ul>
        { tasks.map(task => Task(task)) }
      </ul>
    )
  }
}

export default App;
