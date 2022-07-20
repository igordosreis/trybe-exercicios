import { Component } from 'react';
import './App.css';

class App extends Component {
  // constructor(props) { // Caso seja necessario acessar uma props dentro do construtor
  constructor() {
    super()
    this.state = {
      numberOfClicksButtonOne: 0,
      numberOfClicksButtonTwo: 0,
    }
    this.printText1 = this.printText1.bind(this);
    this.clickCounter = this.clickCounter.bind(this);
  }

  printText1() { // Pode-se usar arrow functions para declarar a funcao dentro da clase, mas isso torna a aplicacao menos performatica
    console.log(this);
    console.log(Object.keys(this));
    console.log(Object.values(this));
    console.log('Texto 1');
    this.setState((previousState, _props) => ({
      numberOfClicksButtonOne: previousState.numberOfClicksButtonOne + 1
    }))
  }
  clickCounter() {
    this.setState((previousState, _props) => ({ // Props é o 2o parametro da funcao setState e ele é obrigatório, mas como ele não sera utilizado, a notação _props é usada para indicar isso
      numberOfClicksButtonTwo: previousState.numberOfClicksButtonTwo + 1
    })) // documentacao do setState https://pt-br.reactjs.org/docs/react-component.html#setstate
  }

  render() {
    return (
      <div>
        <button onClick={this.printText1}>Botao 1</button>
        <button onClick={this.clickCounter}>{ this.state.numberOfClicksButtonTwo }</button>
        {/* Se ao clicar no botao eu quisesse chamar uma funcao com parametro, posso usar a sintaxe abaixo */}
        {/* <button onClick={() => this.functionWithParam(param)}>{ this.state.numberOfClicks }</button>  */}
      </div>
    );
  }
}

export default App;
