import React, { Component } from 'react';
import { toggleTodo, deleteTodo } from '../action';
import { connect } from 'react-redux';
import genTodos from '../selectors'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handClick = this.handClick.bind(this)
    }
    handleChange(id){
        this.props.toggleTodo(id)
    }
    handClick(id){
        this.props.deleteTodo(id)
    }
    render() {
        let { todos, filter } = this.props
        todos = genTodos(todos, filter)
        console.log(todos)
        return (
            todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <input type="radio" checked={todo.completed} onClick={() => this.handleChange(todo.id)} />
                        <span className = {`complete-${todo.completed}`}>{todo.value}</span>
                        <button onClick = {()=>{this.handClick(todo.id)}}>delete</button>
                    </div>
                )
            })
        )
    }

}
function mapStateToProps(state) {
    return {
        todos: state.todos,
        filter: state.filter
    };
}
const  mapDispatchToProps = {
    toggleTodo,
    deleteTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
