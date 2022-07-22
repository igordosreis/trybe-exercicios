import { Component } from "react";
import pokemons from "../data";
import PokemonCard from "./PokemonCard";
import CreateButtons from "./CreateButtons";

class PokemonList extends Component {
    constructor() {
        super()
        this.state = {
            indexCounter: 0,
            typeFilter: '',
            filteredPokemon: pokemons.length,
        }
    };
    
    nextPokemon = () => {
        this.setState(({ indexCounter, filteredPokemon }, _props) => ({
            indexCounter: (indexCounter === filteredPokemon - 1) ? 0 : indexCounter + 1,
        }))
    };

    createTypesButton = () => pokemons
        .reduce((typesArray, currentPkm) => typesArray.includes(currentPkm.type)
            ? typesArray
            // : typesArray.push(currentPkm.type)
            : [...typesArray, currentPkm.type]
        , [])
        .map((type) => <CreateButtons 
            type = { type } 
            key = { type } 
            changeParentState = { this.changeFilter } />);


    changeFilter = (type) => this.setState({ typeFilter: type, indexCounter: 0 });
    
    render() {
 
        const filteredPokemon = pokemons.filter((pokemon) => pokemon.type.includes(this.state.typeFilter));

        return ( 
            <>
                <div className="cardContainer"> 
                    { filteredPokemon 
                    .filter((pokemon) => pokemon.type.includes(this.state.typeFilter))
                    .map((pokemon, index) => (index === this.state.indexCounter)
                        ? <PokemonCard pokemon = { pokemon } key = { pokemon.id } />
                        : null) 
                    }
                </div>
                <div className="buttonContainer">
                    <button 
                        onClick={ () => {
                            this.setState({ filteredPokemon: filteredPokemon.length })
                            this.nextPokemon() 
                        }} 
                        disabled={ (filteredPokemon.length === 1) ? true : false }>Next pokemon</button>
                    
                    <button onClick={ () => this.setState({ typeFilter: '' }) }>All types</button>
                    { this.createTypesButton() }
                </div>
            </>
        );
    }
}

export default PokemonList;

// ______________________________________________________________________________________________
// ______________________________________________________________________________________________


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

//     createTypesButton = () => pokemons
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
//                     .filter((pokemon) => pokemon.type.includes(this.state.typeFilter))
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
//                     { this.createTypesButton() }
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

//     // createTypesButton = () => pokemons
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
        
//         const filteredPokemon = pokemons.filter((pokemon) => pokemon.type.includes(this.state.typeFilter));
//         // console.log(this.props.filteredPokemon)
//         return ( 
//             <>
//                 <div className="cardContainer"> 
//                     { filteredPokemon 
//                     .filter((pokemon) => pokemon.type.includes(this.state.typeFilter))
//                     .map((pokemon, index) => (index === this.state.indexCounter)
//                         ? <PokemonCard pokemon = { pokemon } key = { pokemon.id } />
//                         : null) 
//                     }
//                 </div>
//                 <div className="buttonContainer">
//                     {/* { this.createTypesButton() } */}
//                     { pokemons
//                         .reduce((typesArray, currentPkm) => typesArray.includes(currentPkm.type)
//                             ? typesArray
//                             // : typesArray.push(currentPkm.type)
//                             : [...typesArray, currentPkm.type]
//                         , [])
//                         .map((type) => <CreateButtons 
//                             type = { type } 
//                             key = { type } 
//                             length = { filteredPokemon.length }
//                             changeParentFilter= { this.changeFilter } 
//                             changeParentLength = { this.changeLength } />)
//                     }
//                     <button 
//                         onClick={ () => { this.nextPokemon() }} 
//                         disabled={ (filteredPokemon.length === 1) ? true : false }>Next pokemon</button>
                    
//                     <button onClick={ () => this.setState({ typeFilter: '' }) }>All types</button>
//                 </div>
//             </>
//         );
//     }
// }

// export default PokemonList;

