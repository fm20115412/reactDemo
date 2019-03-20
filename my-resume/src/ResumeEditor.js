import React, { Component } from 'react';
import './ResumeEditor.scss'
class ResumeEditor extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected : 'introduction',
            lists: ['introduction', 'education', 'project', 'award', 'internship','others'],
            introduction : ['姓名','性别','年龄','出生日期','联系方式'],
            education : ['本科','研究生'],
            project : ['项目一','项目二','项目三'],
            award: ['奖励一','奖励二','奖励三'],
            internship: ['实习一','实习二'],
            others :['其他']
        }
    }
    render(){
        const listItems = this.state.lists.map((item,index) =>
            <li key = {index} 
                className = {this.state.selected === item ? 'active' :''}
                onClick = {()=>{this.setState({selected:item})}}>
                {item}
            </li>
        );
        const panelItems = this.state.lists.map((item,index) =>
            <li key = {index} 
                className = {this.state.selected === item ? 'show' :'hide'}>
                {this.state[item]}
            </li>
        );
        return(
            <div id = 'resumeEditor'>
            <nav>
                <ol>
                    {listItems}
                </ol>
            </nav>
            <ol className = 'panels'>
                {panelItems}
            </ol>
            </div>
        )
    }
}
export default ResumeEditor;