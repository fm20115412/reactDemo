import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Button.scss'

class Button extends Component {

    render() {
        const classNames = [
            'component-button',
            this.props.wide ? 'wide' : '',
            this.props.orange ? 'orange' : ''
        ]
        return (
            <div className={classNames.join(' ')}>
                <button onClick={() => this.props.handleClick(this.props.name)}>{this.props.name}</button>
            </div>
        )
    }
}
Button.propTypes = {
    handleClick: PropTypes.func,
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
}

export default Button