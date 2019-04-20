import React, { Component } from 'react';
import AddTodo from './AddTodo';
import ShowBar from './ShowBar';
import TodoList from './TodoList';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.addTodo = this.addTodo.bind(this)
        this.toggleTodo = this.toggleTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.deleteCompleted = this.deleteCompleted.bind(this)
    }
    addTodo(store,text){
        console.log('text is ',text)
        store.dispatch({
            type:'ADD_TODO',
            payload:text
        })
    }
    toggleTodo(store,index){
        console.log('index is ', index)
        store.dispatch({
            type: 'TOGGLE_TODO',
            payload: index
        })
    }
    toggleStatus(store,status){
        console.log('status is ',status)
        store.dispatch({
            type:'TOGGLE_SHOW',
            payload:status

        })
    }
    deleteTodo(store,index){
        console.log('delete is ' ,index)
        store.dispatch({
            type:'DELETE_TODO',
            payload:index
        })
    }
    deleteCompleted(store){
        store.dispatch({
            type:'DELETE_COMPLETED'
        })
    }
    render(){
        let store = this.props.store
        let todos = store.getState().todos
        let showStatus = store.getState().toggleShow
        if(showStatus === 'active'){
            todos = todos.filter((todo)=>{
                return !todo.completed
            })
        }
        if(showStatus === 'completed'){
            todos = todos.filter((todo) => {
                return todo.completed
            })
        }

        return (
            <div className = 'app'>
                <AddTodo addTodo = {(text)=>this.addTodo(store,text)}/>
                <TodoList todos={todos} toggleTodo={(index) => this.toggleTodo(store,index)} deleteTodo = {(index)=>this.deleteTodo(store,index)}/>
                <ShowBar toggleStatus={(status) => this.toggleStatus(store, status)} deleteCompleted = {()=>this.deleteCompleted(store)}/>
            </div>
        )
    }

}
export default App;
