import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class TodoList extends Component{
    constructor(props){
        super(props)
        this.handleRadioChange = this.handleRadioChange.bind(this)
    }
    handleRadioChange(index) {
        this.props.toggleTodo(index)
    }
    render(){
        const todoItems = this.props.todos.map((todo,index) => {
            return (
                <div>
                    <input type='radio' checked={todo.completed} onClick={()=>this.handleRadioChange(index)} />
                    <span className={`todo-${todo.completed}`}>{todo.text}</span>
                    <span>{todo.completed}</span>
                    <button onClick = {()=>this.props.deleteTodo(index)}>delete</button>
                </div>
            )
        });
        return todoItems
    }
}
export default TodoList