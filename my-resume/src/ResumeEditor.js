import React, { Component } from 'react';
import './ResumeEditor.scss'
class ResumeEditor extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected : 'introduction',
            lists:[
                { type:"introduction"},
                { type:"education"},
                { type:"project"},
                { type:"award"},
                { type:"internship"},
                { type:"others"}
            ],
            introduction:[
                {name:"姓名"},
                {name:"性别"},
                {name:"年龄"},
                {name:"出生日期"},
                {name:"联系方式"}
            ],
            education:[
                {name:"本科"},
                {name:"研究生"},
                {name:"博士"}
            ],
            project:[
                {name:"项目一"},
                {name:"项目二"},
                {name:"项目三"}
            ],
            award:[
                {name:"奖励一"},
                {name:"奖励二"},
                {name:"奖励三"}
            ],
            internship:[
                {name:"实习一"},
                {name:"实习二"},
                {name:"实习三"}
            ],
            others:[
                {name:"其他"}
            ],
        }
        this.addId = this.addId.bind(this)
    }
    addId(data){
        var localCounter = 1;
        data.forEach(el => {
            el.id = localCounter++;
        });
    }
    componentDidMount(){
        this.addId(this.state.lists)
        this.addId(this.state.education)
        this.addId(this.state.introduction)
        this.addId(this.state.internship)
        this.addId(this.state.project)
        this.addId(this.state.award)
        this.addId(this.state.others)
    }
    render(){
        const listItems = this.state.lists.map((item) =>
            <li key = {item.id} 
                className = {this.state.selected === item.type ? 'active' :''}
                onClick = {()=>{this.setState({selected:item.type})}}>
                {item.type}
            </li>
        );
        const panelItems = this.state.lists.map((item) =>
            <li key = {item.id} 
                className = {this.state.selected === item.type ? 'show' :'hide'}>
                {this.state[item.type].map((item)=>item.name)}
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