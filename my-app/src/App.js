import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            square:Array(9).fill(null)
        }
    }
    handleclick(i){
        console.log(i);
        this.state.square.splice(i,1,'x')
        this.setState({
            square:this.state.square
        })
    }
    renderSquare(i){
        return <Square value = {this.state.square[i]} click = {()=>{this.handleclick(i)}}/>
    }
    render(){
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className = 'board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className = 'board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className = 'board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
        </div>
        )
       
    }
}
class Square extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.click)
    }
    render(){
        return(
            <button className = 'square' onClick = {this.props.click}>
            {this.props.value} 
            </button>
        )
    }
}
class App extends Component {
    render() {
        return (
            <Board />
        );
    }
}

export default App;