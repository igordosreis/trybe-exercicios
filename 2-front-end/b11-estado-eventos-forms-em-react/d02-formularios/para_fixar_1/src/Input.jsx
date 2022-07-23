import React, { Component } from 'react';

class Input extends Component {
    // constructor() {
    //     super()
    // }
    render() {
        const { id, name, type, onChange, value, children } = this.props;
        return(
            <label htmlFor={ id }>
                { (type !== 'checkbox') ? children : null }
                <input
                    id={ id }
                    name={ name }
                    type={ type }
                    onChange={ onChange }
                    value={ value }
                />
                { (type === 'checkbox') ? children : null }
            </label>
        )
    }
}

export default Input;