import { Component } from "react";
import pokemons from "../data";
import PokemonCard from "./PokemonCard";
import Buttons from "./Buttons";

class PokemonList extends Component {
    constructor() {
        super()
        this.state = {
            indexCounter: 0,
            typeFilter: '',
        }
    };
    
    nextPokemon = (filteredPokemonLength) => {
        this.setState(({ indexCounter }) => ({
            indexCounter: (indexCounter === filteredPokemonLength - 1) ? 0 : indexCounter + 1,
        }))
    };

    createTypeButtons = () => 
        [...new Set(pokemons.map(({ type }) => type ))] // Todo o reduce anterior pode ser trocado por um new Set() https://vidafullstack.com.br/javascript/new-set-com-javascript/
        .map((type) => <Buttons 
            text = { type } 
            key = { type }
            onClick = { this.changeFilter } 
            className = { 'type' }/>);
    // Essa é a sintaxe para se usar o children do componente; deve-se usar as tags do componente para abrir e fechar, como fosse uma tag HTML. 
    // O valor do children passado para o componente é o valor que se encontra entre as tags. A sintaxe do componente Buttons
    // para se usar children é o segundo bloco de código no arquivo de Buttons; ele está comentado.
    // createTypeButtons = () => 
    //     [...new Set(pokemons.map(({ type }) => type ))] 
    //     .map((type) => <Buttons 
    //         type = { type } 
    //         key = { type }
    //         onClick = { this.changeFilter } 
    //         className = { 'type' }> {type} </Buttons>);

    changeFilter = (type) => this.setState({ typeFilter: type, indexCounter: 0 });
    
    render() {
        
        const { typeFilter, indexCounter } = this.state;
        const filteredPokemon = pokemons.filter((pokemon) => pokemon.type.includes(typeFilter));
        const currentPokemon = filteredPokemon[indexCounter]; // Essa solucao para exibir um único pokemon é mais sucinta, ao invés do .map() comentado abaixo

        return ( 
            <>
                <div className="cardContainer"> 
                    <PokemonCard pokemon = { currentPokemon } key = { currentPokemon.id } />
                    {/* { filteredPokemon 
                        .map((pokemon, index) => (index === this.state.indexCounter)
                            ? <PokemonCard pokemon = { pokemon } key = { pokemon.id } />
                            : null) 
                    } */}
                </div> 
                <div className="buttonContainer">
                    <Buttons 
                        text={ 'Next pokemon' }
                        onClick={ () => this.nextPokemon(filteredPokemon.length) } // nextPokemon pode receber diretamente o length como parametro, tornando desnecessario manipular o length atraves do state. Obrigado, Rubens!
                        className={ 'next-pokemon' }
                        disabled={ filteredPokemon.length <= 1 } />
                    <Buttons 
                        text={ 'All types' }
                        onClick={ () => this.setState({ typeFilter: '' }) }
                        className={ 'type' } />
                    { this.createTypeButtons() }
                </div>
            </>
        );
    }
}

export default PokemonList;

// ______________________________________________________________________________________________
// ______________________________________________________________________________________________

// Segunda versao - declara a funcao nextPokemon e usa uma callback no botao de passar para 1) chamar nextPokemon e 2) manipular o state contendo o length do array de pokemons filtrados

// import { Component } from "react";
// import pokemons from "../data";
// import PokemonCard from "./PokemonCard";
// import CreateButtons from "./CreateButtons";

// class PokemonList extends Component {
//     constructor() {
//         super()
//         this.state = {
//             indexCounter: 0,
//             typeFilter: '',
//             filteredPokemon: pokemons.length,
//         }
//     };
    
//     nextPokemon = () => {
//         this.setState(({ indexCounter, filteredPokemon }, _props) => ({
//             indexCounter: (indexCounter === filteredPokemon - 1) ? 0 : indexCounter + 1,
//         }))
//     };

//     createTypeButtons = () => pokemons
//         .reduce((typesArray, currentPkm) => typesArray.includes(currentPkm.type)
//             ? typesArray
//             // : typesArray.push(currentPkm.type)
//             : [...typesArray, currentPkm.type]
//         , [])
//         .map((type) => <CreateButtons 
//             type = { type } 
//             key = { type } 
//             changeParentState = { this.changeFilter } />);

//     changeFilter = (type) => this.setState({ typeFilter: type, indexCounter: 0 });
    
//     render() {
 
//         const filteredPokemon = pokemons.filter((pokemon) => pokemon.type.includes(this.state.typeFilter));

//         return ( 
//             <>
//                 <div className="cardContainer"> 
//                     { filteredPokemon 
//                     .map((pokemon, index) => (index === this.state.indexCounter)
//                         ? <PokemonCard pokemon = { pokemon } key = { pokemon.id } />
//                         : null) 
//                     }
//                 </div>
//                 <div className="buttonContainer">
//                     <button 
//                         onClick={ () => {
//                             this.setState({ filteredPokemon: filteredPokemon.length })
//                             this.nextPokemon() 
//                         }} 
//                         disabled={ (filteredPokemon.length === 1) ? true : false }>Next pokemon</button>
                    
//                     <button onClick={ () => this.setState({ typeFilter: '' }) }>All types</button>
//                     { this.createTypeButtons() }
//                 </div>
//             </>
//         );
//     }
// }

// export default PokemonList;

// ______________________________________________________________________________________________
// ______________________________________________________________________________________________

// Primeira versao - usa a funcao nextPokemon como uma callback anonima do onClick no botao de passar para o proximo pokemon

// import { Component } from "react";
// import pokemons from "../data";
// import PokemonCard from "./PokemonCard";
// import CreateButtons from "./CreateButtons";

// class PokemonList extends Component {
//     constructor() {
//         super()
//         this.state = {
//             indexCounter: 0,
//             typeFilter: '',
//         }
//     };

//     createTypeButtons = () => pokemons
//         .reduce((typesArray, currentPkm) => typesArray.includes(currentPkm.type)
//             ? typesArray
//             : [...typesArray, currentPkm.type]
//         , [])
//         .map((type) => <CreateButtons type = { type } key = { type } changeParentState = { this.changeFilter } />);

//     changeFilter = (type) => this.setState({ typeFilter: type, indexCounter: 0 });

//     render() {
//         console.log(this.state);
//         const filteredPokemon = pokemons.filter((pokemon) => pokemon.type.includes(this.state.typeFilter));

//         return ( 
//             <>
//                 <div className="cardContainer"> 
//                     { filteredPokemon 
//                     .map((pokemon, index) => (index === this.state.indexCounter)
//                         ? <PokemonCard pokemon = { pokemon } key = { pokemon.id } />
//                         : null) 
//                     }
//                 </div>
//                 <div className="buttonContainer">
//                     <button onClick={() => {
//                             this.setState(({ indexCounter }, _props) => ({
//                             indexCounter: (indexCounter === filteredPokemon.length - 1) ? 0 : indexCounter + 1,
//                             }))
//                         }} disabled={ (filteredPokemon.length === 1) ? true : false }>Next pokemon</button>
//                     <button onClick={() => this.setState({ typeFilter: '' })}>All types</button>
//                     { this.createTypeButtons() }
//                 </div>
//             </>
//         );
//     }
// }

// export default PokemonList;

// ______________________________________________________________________________________________
// ______________________________________________________________________________________________

// Essa solucao nao funciona. Quando um botao de tipo é criado, o length que é passado adiantado é o
// último length registrado. Por exemplo, quando a página é carregada pela primeira vez, o length é 9.
// Ao clicar no botão Fire, a página é renderizada com um array de comprimento 2, mas o length continua 9.
// Para que o length seja 2, o botão Fire deve ser clicado novamente.

// import { Component } from "react";
// import pokemons from "../data";
// import PokemonCard from "./PokemonCard";
// import CreateButtons from "./CreateButtons";

// class PokemonList extends Component {
//     constructor() {
//         super()
//         this.state = {
//             indexCounter: 0,
//             typeFilter: '',
//             filteredPokemon: pokemons.length,
//         }
//     };
    
//     nextPokemon = () => {
//         this.setState(({ indexCounter, filteredPokemon }, _props) => ({
//             indexCounter: (indexCounter === filteredPokemon - 1) ? 0 : indexCounter + 1,
//         }))
//     };

//     // createTypeButtons = () => pokemons
//     //     .reduce((typesArray, currentPkm) => typesArray.includes(currentPkm.type)
//     //         ? typesArray
//     //         // : typesArray.push(currentPkm.type)
//     //         : [...typesArray, currentPkm.type]
//     //     , [])
//     //     .map((type) => <CreateButtons 
//     //         type = { type } 
//     //         key = { type } 
//     //         changeParentState = { this.changeFilter } />);

//     changeFilter = (type) => this.setState({ typeFilter: type, indexCounter: 0 });
    
//     changeLength = (length) => this.setState({ filteredPokemon: length });

//     render() {
        
//         const filteredPokemon1 = pokemons.filter((pokemon) => pokemon.type.includes(this.state.typeFilter));
//         // console.log(this.props.filteredPokemon)
//         return ( 
//             <>
//                 <div className="cardContainer"> 
//                     { filteredPokemon1 
//                     .filter((pokemon) => pokemon.type.includes(this.state.typeFilter))
//                     .map((pokemon, index) => (index === this.state.indexCounter)
//                         ? <PokemonCard pokemon = { pokemon } key = { pokemon.id } />
//                         : null) 
//                     }
//                 </div>
//                 <div className="buttonContainer">
//                     {/* { this.createTypeButtons() } */}
//                     { pokemons
//                         .reduce((typesArray, currentPkm) => typesArray.includes(currentPkm.type)
//                             ? typesArray
//                             // : typesArray.push(currentPkm.type)
//                             : [...typesArray, currentPkm.type]
//                         , [])
//                         .map((type) => <CreateButtons 
//                             type = { type } 
//                             key = { type } 
//                             length = { filteredPokemon1.length }
//                             changeParentFilter= { this.changeFilter } 
//                             changeParentLength = { this.changeLength } />)
//                     }
//                     <button 
//                         onClick={ () => { this.nextPokemon() }} 
//                         disabled={ (filteredPokemon1.length === 1) ? true : false }>Next pokemon</button>
                    
//                     <button onClick={ () => this.setState({ typeFilter: '' }) }>All types</button>
//                 </div>
//             </>
//         );
//     }
// }

// export default PokemonList;

