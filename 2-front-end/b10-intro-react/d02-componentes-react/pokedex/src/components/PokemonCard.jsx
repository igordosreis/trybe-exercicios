import { Component } from "react";

class PokemonCard extends Component {
    render () {
        const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
        return (
            <div className="pokemonCard">
                <div className="pokemonCardText">
                    <p>{ name }</p>
                    <p>{ type }</p>
                    <p>{ `Average weight: ${value} ${measurementUnit}` }</p>
                </div>
                <div className="pokemonCardImage">
                    <img src={ image } alt={ `${name} gif` } />
                </div>
            </div>
        );
    }
}

export default PokemonCard;