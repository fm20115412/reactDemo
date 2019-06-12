import React,{ Component } from 'react';
import {connect} from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import {listActions} from './HomeRedux';
import {bindActionCreators} from 'redux';



class Home extends Component{
    render(){
        return(
            <div>
                <div> Home </div>
                <PreviewList {...this.props.list} {...this.props.listActions} />
            </div>
        )
    }
}
const mapStateToProps = function(state){
    return {
        list : state.home.list
    }
}
const mapDispatchToProps = function(dispatch){
    return {
        listActions : bindActionCreators(listActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
