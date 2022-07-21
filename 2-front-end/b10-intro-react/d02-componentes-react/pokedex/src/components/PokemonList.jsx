import { Component } from "react";
import pokemons from "../data";
import PokemonCard from "./PokemonCard";

class PokemonList extends Component {
    render() {
        return (
            <div className="cardContainer">
                { pokemons.map((pokemon) => 
                    <PokemonCard pokemon = { pokemon } key = { pokemon.id } />) }
            </div>
        );
    }
}

export default PokemonList;