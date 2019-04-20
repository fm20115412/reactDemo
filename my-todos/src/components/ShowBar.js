import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ShowBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='addtodo'>
                <button onClick={() => this.props.toggleStatus('all')}>show all</button>
                <button onClick={() => this.props.toggleStatus('active')}>show active</button>
                <button onClick={() => this.props.toggleStatus('completed')}>show completed</button>
                <button onClick={this.props.deleteCompleted}>delete completed</button>
            </div>
        )
    }
}
export default ShowBar