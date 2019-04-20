import React, { Component } from 'react';
import './App.css';
import AddTodo from './addTodo'
import TodoList from './todoList'
import Footer from './footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
        <Footer/>
      </div>
    );
  }
}

export default App;
