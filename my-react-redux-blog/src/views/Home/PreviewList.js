import React ,{Component} from 'react';
import Preview from './Preview';
import PropTypes from 'prop-types';

class PreviewList extends Component{
    render(){
        return this.props.articleList.map(item =>(
            <Preview {...item} key = {item.id}/>
        ));
    }
}
PreviewList.PropTypes = {
    articleList : PropTypes.arrayOf(PropTypes.object)
}
export default PreviewList;