import { Component } from 'react';
import './App.css';

function printText1() {
  console.log('Texto 1')
}
function printText2() {
  console.log('Texto 2')
}
function printText3() {
  console.log('Texto 3')
}

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={printText1}>Botao 1</button>
        <button onClick={printText2}>Botao 2</button>
        <button onClick={printText3}>Botao 3</button>
      </div>
    );
  }
}

export default App;
