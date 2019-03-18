import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            history: [{
                square: Array(9).fill(null)
            }],
            currentStep: 0,
            xIsNext: true
        }
        this.calCulateWinner = this.calCulateWinner.bind(this)
        this.handleclick = this.handleclick.bind(this)
        this.jumpTo = this.jumpTo.bind(this)
    }
    calCulateWinner(square) {
        const array = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < array.length; i++) {
            let [a, b, c] = array[i];
            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a]
            }
        }
        return null

    }
    handleclick(i) {
        let history = this.state.history.slice(0,this.state.currentStep+1)
        let square = history[history.length -1 ].square.slice()
        let winner = this.calCulateWinner(square);
        if (winner || square[i]) {
            return;
        }
        square[i] = this.state.xIsNext ? 'x' : 'o'

        this.setState({
            history: history.concat([{
                square: square
            }]),
            currentStep:history.length,
            xIsNext: !this.state.xIsNext
        })
    }
    jumpTo(move) {
        this.setState({
            currentStep: move,
            xIsNext:(move%2 === 0)
        })
    }
    render() {
        let history = this.state.history
        let current = history[this.state.currentStep]
        let status = 'Next player: ' + (this.state.xIsNext ? 'x' : 'o')
        let winner = this.calCulateWinner(current.square)
        if (winner) {
            status = 'the winner is ' + winner
        }
        let moves = history.map( (item, index) => {
            let desc = index ?
                'Go to move #' + index :
                'Go to game start';
            return (
                <li key={index}><button onClick={() => this.jumpTo(index)}>{desc}</button></li>
            )
        })
        return (
            <div className="game">
                <div className="game-board">
                    <Board square={current.square} click={(i) => this.handleclick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }
}
class Board extends Component {
    constructor(props) {
        super(props)
    }
    renderSquare(i) {
        return <Square value={this.props.square[i]} click={() => { this.props.click(i) }} />
    }
    render() {
        return (
            <div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )

    }
}
function Square(props) {
    return (
        <button className='square' onClick={props.click}>
            {props.value}
        </button>
    )
}
class App extends Component {
    render() {
        return (
            <Game />
        );
    }
}

export default App;