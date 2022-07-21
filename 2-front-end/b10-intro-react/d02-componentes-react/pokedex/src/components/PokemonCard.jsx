import { Component } from "react";
import PropTypes from 'prop-types';

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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
    }).isRequired,
};

export default PokemonCard;