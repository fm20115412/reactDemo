import React, { Component } from 'react';
import { toggleFilter } from '../action';
import { connect } from 'react-redux';

class Footer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = 'footer'>
                <button onClick = {()=>this.props.toggleFilter('ALL')}>show all</button>
                <button onClick = {()=>this.props.toggleFilter('COMPLETED')}>shpw completed</button>
                <button onClick = {()=>this.props.toggleFilter('ACTIVE')}>show active</button>
            </div>
        )
    }
}
const mapDispatchToProps = {
    toggleFilter
}
export default connect(undefined,mapDispatchToProps)(Footer)