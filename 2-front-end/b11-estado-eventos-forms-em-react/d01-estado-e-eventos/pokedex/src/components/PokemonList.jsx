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
            filteredPokemon: pokemons,
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