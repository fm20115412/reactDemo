import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AddTodo extends Component{
    constructor(props){
        super(props)
        this.state = {
            value:'',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onKeyup = this.onKeyup.bind(this)
    }
    handleInputChange(event){
        this.setState({ value: event.target.value });
    }
    
    onKeyup(e) {
        if (e.keyCode === 13) {
            this.props.addTodo(this.state.value)
            this.setState({value:''})
        }
    }

    render() {
        return (
            <div className='addtodo'>
                <input type='text' name='todo-input' placeholder = 'add todo' value={this.state.value} onChange={this.handleInputChange} onKeyUp={this.onKeyup}/>
            </div>
        )
    }
}
export default AddTodo