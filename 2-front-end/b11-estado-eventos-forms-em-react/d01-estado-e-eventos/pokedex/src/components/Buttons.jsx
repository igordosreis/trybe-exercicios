import { Component } from "react";

class Buttons extends Component {
    render () {
        const { text, onClick, disabled, className } = this.props;
        return (
            <button 
                className={ `button ${className}` }
                onClick={ () => onClick(text) } // Curiosidade: quando uma funcao no componente PokemonList é chamada já com um valor, o valor daquele arquivo é usado ao invés de 'text'; evitar isso é uma das vantagens de se utilizar children aqui.
                disabled={ disabled }
                type='button' >
                { `${text} `}
            </button>
        );
    }
}

export default Buttons;

// ______________________________________________________________________________________________
// ______________________________________________________________________________________________

// Sintaxe para se usar this.props.children, conforme mencionado no arquivo PokemonList

// import { Component } from "react";

// class Buttons extends Component {
//     render () {
//         const { text, onClick, disabled, className, children } = this.props;
//         return (
//             <button 
//                 className={ `button ${className}` }
//                 onClick={ onClick }
//                 disabled={ disabled }
//                 type='button' >
//                 { children }
//             </button>
//         );
//     }
// }

// export default Buttons;

// ______________________________________________________________________________________________
// ______________________________________________________________________________________________

// A solucao abaixo nao funciona; ela gera o problema descrito no ultimo bloco de codigo comentado do PokemonList.

// import { Component } from "react";

// class CreateButtons extends Component {
//     render () {
//         const { type, changeParentFilter, changeParentLength, length } = this.props;
//         return (
//             <button className="buttonType" onClick ={ () => {
//                 console.log(this.props)
//                 changeParentLength(length)
//                 changeParentFilter(type)
//                 } }>
//             {/* <button className="buttonType" onClick ={ () => changeParentState({typeFilter: type}) }> */}
//                 { `${type} `}
//             </button>
//         );
//     }
// }

// export default CreateButtons;
