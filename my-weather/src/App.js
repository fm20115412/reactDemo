import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import Dialog from './components/Dialog'

class App extends Component{
    constructor(){
        super();
        this.handleAddRegion = this.handleAddRegion.bind(this);
        this.state = {
            isShowDialog : false,
        }
    }
    handleAddRegion(){
        this.setState({
            isShowDialog:true,
        })
    }
    render(){
        const isDataLoaded = this.props.isDataLoaded;
        let ele;
        if(isDataLoaded){
            ele = this.props.locations.map(location => {
                return (
                    <div>
                        <ul>
                            <li>{location.current_time}</li>
                            <li>{location.region_name}</li>
                            <li><img src={location.country_flag} width='30px'/></li>
                            <li>{location.weather.summary}</li>
                        </ul>
                        <button onClick = {this.handleAddRegion}>Add region</button>  
                        {this.state.isShowDialog ? <Dialog /> : null}
                    </div>
                )
            })
        }else{
            ele = <div>loading</div>
        }
        return (
            <div>{ele}</div>
        )
    }
}
function mapStateToProps(state) {
    let { locations , isDataLoaded } = state;
    return { locations , isDataLoaded };
}
export default connect(mapStateToProps)(App);
