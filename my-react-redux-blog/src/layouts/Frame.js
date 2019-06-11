import React,{Component} from 'react';
import Nav from './Nav';


class Frame extends Component{
    render(){
        return (
            <div className = 'frame'>
                <div className = 'header'>
                    <Nav />
                </div>
                <div className = 'contend'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Frame;