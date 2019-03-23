import React, { Component } from 'react';
import './ResumeEditor.scss'
class ResumeEditor extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected : 'introduction',
            lists:[
                { 
                    type:"introduction",
                    icon:"geren13"
                },
                { 
                    type:"education",
                    icon:"jiaoyu"
                },
                { 
                    type:"project",
                    icon:"xiangmu"
                },
                { 
                    type:"award",
                    icon:"jiangli"
                },
                { 
                    type:"internship",
                    icon:"shixijingli"
                },
                { 
                    type:"others",
                    icon:"qita1"
                }
            ],
            introduction:[
                {
                    name:"姓名",
                    value:"冯敏"
                },
                {   name:"性别" ,
                    value:"女"
                },
                {
                    name:"年龄",
                    value:11
                },
                {
                    name:"出生日期",
                    value:"1994-2-8"
                },
                {
                    name:"联系方式",
                    value:"18716259769"
                }
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
        this.handleChange = this.handleChange.bind(this)
    }
    addId(data){
        var localCounter = 1;
        data.forEach(el => {
            el.id = localCounter++;
        });
    }
    componentDidMount(){
        this.addId(this.state.lists)
    }
    handleChange(newvalue,list,item,index){
        let copy = this.state[list.type].slice()
        let type = list.type
        copy[index].value = newvalue
        this.setState({
            type:copy
        })
    }
    render(){
        const listItems = this.state.lists.map((list) =>
            <li key = {list.id} 
                className = {this.state.selected === list.type ? 'active' :''}
                onClick = {()=>{this.setState({selected:list.type})}}>
                <span className={`icon iconfont icon-${list.icon}`}></span>
            </li>
        );
        const panelItems = this.state.lists.map((list)=>{
            return (
                < li key={list.id}
                    className={this.state.selected === list.type ? 'show' : 'hide'} >
                    {   this.state[list.type].map((item,index) => {
                            return (
                                <div>
                                    <div className='resumeField'>
                                        <label>{item.name}</label>
                                        <input type="text" value={item.value} onChange={(e) => this.handleChange(e.target.value, list, item, index)} />
                                    </div>
                                    <hr />
                                </div>
                                
                            )
                        })
                    }
                </li >
            )
        })
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