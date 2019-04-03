import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            next:null,
            operation:null,
            total:null
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(name){
        this.setState(calculate(this.state,name))
    }
    render() {
        return (
            <div className="App">
                <Display value={this.state.next || this.state.total || '0'} />
                <ButtonPanel handleClick = {this.handleClick}/>
            </div>
        );
    }
}

export default App;
