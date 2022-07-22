import { Component } from "react";

class Buttons extends Component {
    render () {
        const { text, onClick, disabled, className } = this.props;
        return (
            <button 
                className={ `button ${className}` }
                onClick={ () => onClick(text) }
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

// import { Component } from "react";

// class Buttons extends Component {
//     render () {
//         const { type, onClick, disabled, className, children } = this.props;
//         return (
//             <button 
//                 className={ `button ${className}` }
//                 onClick={ () => onClick(type) }
//                 disabled={ disabled }
//                 type='button' >
//                 {/* { `${type} `} */}
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
