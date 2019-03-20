import React, { Component } from 'react';
import './Topbar.scss'
class Topbar extends Component {
    render(){
        return(
            <div id = 'topbar'>
                <div className="wrapper">
                    <span className="logo">Resumer</span>
                    <div className = 'action'>
                        <button className = 'primary'>预览</button>
                        <button>保存</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Topbar;