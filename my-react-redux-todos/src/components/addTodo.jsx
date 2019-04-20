import React, { Component } from 'react';
import { addTodo } from '../action';
import { connect } from 'react-redux';
 
class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    handleChange(value){
        this.setState({
            value
        })
    }
    handleUpdate(keyCode){
        if(keyCode === 13){
            this.props.addTodo(this.state.value)
            this.setState({
                value :''
            })
        }
    }
    render(){
        return(
            <div className = 'add-todo'>
                <input type="text" placeholder = 'add todo' value = {this.state.value} onChange = {e => this.handleChange(e.target.value)} onKeyUp = {(e) => this.handleUpdate(e.keyCode)}/>
            </div>
        )
    }
}
export default connect(undefined,{addTodo})(AddTodo)