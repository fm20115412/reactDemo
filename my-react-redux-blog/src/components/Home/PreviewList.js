import React ,{Component} from 'react';
import Preview from './Preview';
import PropTypes from 'prop-types';

class PreviewList extends Component{
    componentDidMount(){
        this.props.loadArticles()
    }
    render(){
        const {loading,error,articleList} = this.props;
        if(error){
            return <p className = 'message'>Opps ,something is wrong</p>
        }
        if(loading){
            return <p className = 'message'>Loading</p>
        }
        return articleList.map(item =>(
            <Preview {...item} key = {item.id}/>
        ));
    }
}
PreviewList.PropTypes = {
    articleList : PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    error: PropTypes.bool,
    loadArticles : PropTypes.func
}
export default PreviewList;