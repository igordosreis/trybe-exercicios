import React, { Component } from 'react';
import DataFieldset from './DataFieldset';
import PersonalFieldset from './PersonalFieldset';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            age: '',
            anecdote: '',
            terms: false,
            formularioComErros: true,
        };
    }

    handleError() {
        const { name, email, age, anecdote, terms } = this.state;

        const errorCases = [
            !name.length,
            !email.match(/^\S+@\S+$/i),
            !age.length,
            !anecdote.length,
            !terms,
        ];

        const formularioPreenchido = errorCases.every((error) => error !== true);

        this.setState({
            formularioComErros: !formularioPreenchido,
        });
    }

    handleChange = ({ target: { name, value, type, checked } }) => {
        const actualValue = type === 'checkbox' ? checked : value;
        this.setState({
            [name]: actualValue,
        }, () => this.handleError());
    }

    render() {
        const { name, email, age, anecdote, terms, formularioComErros } = this.state;

        return (
        <div>
            <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
            <form className="form">
            <PersonalFieldset
                nameValue={ name }
                emailValue={ email }
                ageValue={ age }
                handleChange={ this.handleChange }
            />

            <DataFieldset anecdoteValue={ anecdote } handleChange={ this.handleChange } />

            <label htmlFor="terms">
                <input
                    id="terms"
                    type="checkbox"
                    name="terms"
                    onChange={ this.handleChange }
                    value={ terms }
                />
                Concordo com termos e acordos
            </label>
            </form>
            { formularioComErros
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
        </div>
        );
    }
}

export default Form;

// import React, { Component } from 'react';

// class Form extends Component {
//     constructor(){
//         super()
//         this.state ={
//             textInput: '',
//             checkboxInput: false,
//             select: '',
//             radioInput: '',
//             textarea: '',
//         }
//     }
    
//     handleChange = ({ target: { name, value, type, checked } }) => {
//         const actualValue = type === 'checkbox' ? checked : value;
//         this.setState({ [name]: actualValue })
//     }
//     // Pra isso funcionar, o name do input tem que ser usado como chave do state
    
//     // handleInputChange = (event) => this.setState({ inputField: event.target.value })
//     // handleSelectChange = (event) => this.setState({ select: event.target.value })

//     render() {
//         const { textInput, checkboxInput, select, radioInput, textarea } = this.state;
//         return(
//             <div>
//                 <fieldset>
//                     <legend>Random fieldset legend</legend>
//                     <input name="textInput" type="text" onChange={this.handleChange} value={ textInput }/>
//                     <input name="checkboxInput" type="checkbox" onChange={this.handleChange} value={ checkboxInput }/>
//                 </fieldset>
//                 <fieldset>
//                 <legend>Random fieldset legend 2</legend>
//                     <select name="select" id="" onChange={this.handleChange} value={ select }>
//                         <option value="">Choose a sword type</option>
//                         <option value="XXa">Type XXa</option>
//                         <option value="XVIIIa">Type XVIIIa</option>
//                         <option value="XVIIIb">Type XVIIIb</option>
//                         <option value="XVIIIc">Type XVIIIc</option>
//                         <option value="XVIa">Type XVIa</option>
//                     </select>
//                     <input name="radioInput" type="radio" onChange={this.handleChange} checked={ radioInput === "1" } value='1'/> 1
//                     <input name="radioInput" type="radio" onChange={this.handleChange} checked={ radioInput === "2" } value='2'/> 2
//                     <input name="radioInput" type="radio" onChange={this.handleChange} checked={ radioInput === "3" } value='3'/> 3
//                 </fieldset>
//                 <textarea name="textarea" id="" cols="20" rows="10" onChange={this.handleChange} alue={ textarea }></textarea>
//                 <input type="file" />
//             </div>
//         )
//     }
// }

// export default Form;

// import React, { Component } from 'react';
// import Input from './Input';

// class Form extends Component {
//   constructor() {
//     super();

//     this.state = {
//       name: '',
//       email: '',
//       age: '',
//       anecdote: '',
//       terms: false,
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

// handleChange = ({ target: { name, value, type, checked } }) => {
//     const actualValue = type === 'checkbox' ? checked : value;
//     this.setState({ [name]: actualValue })
// }

//   renderSelectInput() {
//     const { age } = this.state;

//     return (
//       <label htmlFor="age">
//         Idade:
//         <select
//           id="age"
//           name="age"
//           onChange={ this.handleChange }
//           value={ age }
//         >
//           <option value="">Selecione</option>
//           <option value="adult">Maior que 18</option>
//           <option value="underage">Menor que 18</option>
//         </select>
//       </label>
//     );
//   }

//   render() {
//     const { name, email, anecdote, terms } = this.state;

//     return (
//       <div>
//         <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
//         <form className="form">
//           <fieldset>
//             <legend>Informações pessoais</legend>

//             <Input
//                 id={ 'name' }
//                 name={ 'name' }
//                 type={ 'text' }
//                 onChange={ this.handleChange }
//                 value={ name }
//             > Nome: </Input>

//             <Input
//                 id={ 'email' }
//                 name={ 'email' }
//                 type={ 'text' }
//                 onChange={ this.handleChange }
//                 value={ email }
//             > Email: </Input>

//             { this.renderSelectInput() }
//           </fieldset>

//           <fieldset>
//             <legend>Texto e arquivos</legend>
//             <label htmlFor="anecdote">
//               Anedota:
//               <textarea
//                 id="anecdote"
//                 name="anecdote"
//                 onChange={ this.handleChange }
//                 value={ anecdote }
//               />
//             </label>

//             <input type="file" />
//           </fieldset>
          
//           <Input
//             id={ 'terms' }
//             name={ 'terms' }
//             type={ 'checkbox' }
//             onChange={ this.handleChange }
//             value={ terms }
//           > Concordo com termos e acordos </Input>

//         </form>
//       </div>
//     );
//   }
// }

// export default Form;