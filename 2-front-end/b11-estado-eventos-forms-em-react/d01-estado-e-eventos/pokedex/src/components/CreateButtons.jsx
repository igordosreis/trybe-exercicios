import { Component } from "react";

class CreateButtons extends Component {
    render () {
        const { type, changeParentState } = this.props;
        return (
            <button className="buttonType" onClick ={ () => changeParentState(type) }>
            {/* <button className="buttonType" onClick ={ () => changeParentState({typeFilter: type}) }> */}
                { `${type} `}
            </button>
        );
    }
}

export default CreateButtons;