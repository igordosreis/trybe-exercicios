import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state ={
            inputField: '',
            checkbox: false,
            select: '',
            radio: '',
            textarea: '',
        }
    }

    handleSelectChange = (event) => this.setState({ select: event.target.value })
    handleInputChange = (event) => this.setState({ inputField: event.target.value })

    render() {
        const { inputField, select } = this.state;
        return(
            <div>
                <input type="text" onChange={this.handleInputChange} value={ inputField }/>
                <input type="checkbox" value='marked'/>
                <select name="swordtypes" id="" onChange={this.handleSelectChange} value={ select }>
                    <option value="">Choose a sword type</option>
                    <option value="XXa">Type XXa</option>
                    <option value="XVIIIa">Type XVIIIa</option>
                    <option value="XVIIIb">Type XVIIIb</option>
                    <option value="XVIIIc">Type XVIIIc</option>
                    <option value="XVIa">Type XVIa</option>
                </select>
                <input type="radio" name='radio' value='1'/>
                <input type="radio" name='radio' value='2'/>
                <input type="radio" name='radio' value='3'/>
                <textarea name="" id="" cols="20" rows="10"></textarea>
            </div>
        )
    }
}

export default Form;