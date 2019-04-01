import React, { Component } from 'react';
import Button from './Button.js'
import PropTypes from "prop-types";
import './ButtonPanel.scss';

class ButtonPanel extends Component {
    render(){
        return(
            <div className = 'component-button-panel'>
                <div className = 'row'>
                    <Button name = 'AC'  handleClick = {this.props.handleClick}></Button>
                    <Button name = '+/-' handleClick = {this.props.handleClick}></Button>
                    <Button name = '%'   handleClick = {this.props.handleClick}></Button>
                    <Button name = '÷'   handleClick = {this.props.handleClick} orange></Button>
                </div>
                <div className = 'row'>
                    <Button name = '7'  handleClick = {this.props.handleClick}></Button>
                    <Button name = '8'  handleClick = {this.props.handleClick}></Button>
                    <Button name = '9'  handleClick = {this.props.handleClick}></Button>
                    <Button name = '*'  handleClick = {this.props.handleClick} orange></Button>
                </div>
                <div className = 'row'>
                    <Button name = '4' handleClick = {this.props.handleClick}></Button>
                    <Button name = '5' handleClick = {this.props.handleClick}></Button>
                    <Button name = '6' handleClick = {this.props.handleClick}></Button>
                    <Button name = '-' handleClick = {this.props.handleClick} orange></Button>
                </div>
                <div className = 'row'>
                    <Button name = '1' handleClick = {this.props.handleClick}></Button>
                    <Button name = '2' handleClick = {this.props.handleClick}></Button>
                    <Button name = '3' handleClick = {this.props.handleClick}></Button>
                    <Button name = '+' handleClick = {this.props.handleClick} orange></Button>
                </div>
                <div className = 'row'>
                    <Button name = '0'  handleClick = {this.props.handleClick} wide></Button>
                    <Button name = '.'  handleClick = {this.props.handleClick}></Button>
                    <Button name = '='  handleClick = {this.props.handleClick} orange></Button>
                </div>
            </div>
        )
    }
}

ButtonPanel.propTypes = {
    handleClick : PropTypes.func
}

export default ButtonPanel