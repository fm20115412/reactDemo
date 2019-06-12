import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './preview.css';

class Preview extends Component{
    render(){
        return (
            <div className = 'artical-preview-item'>
                <h1 className = 'title'>{this.props.title}</h1>
                <span className = 'date'>{this.props.date}</span>
                <p className = 'desc'>{this.props.description}</p>
            </div>
        )
    }
}
Preview.propTypes = {
    title : PropTypes.string,
    link :propTypes.string
}
export default Preview;