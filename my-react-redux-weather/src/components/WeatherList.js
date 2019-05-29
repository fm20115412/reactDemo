import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchWeather } from '../action';
import AddWeather from './AddWeather'

class WeatherList extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        if (this.props.locations.length == 0){
            this.props.init()
        }
    }
    render(){
        let status = this.props.status
        switch (status) {
            case 'loading':
                return <div>天气信息请求中...</div>;
            case 'success': {
                let locations = this.props.locations;
                const locationList = locations.map((location, index) => {
                    return (
                        <div>
                            <span>{location.name}</span>
                            <img src={`https://www.countryflags.io/${location.country}/shiny/48.png`} />
                            <p>{location.weather[0].description}</p>
                        </div>
                    )
                })
                return (
                    <div>
                        {locationList}
                        <AddWeather />
                    </div>  
                )
            };
            case 'failure':
                return <div>天气信息装载失败</div> 
            default:
                throw new Error('unexpected status ' + status);
        }
        
    }
}
const mapStateTopProps = (state) => {
    return {
        locations:state.locations,
        status:state.status

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        init: () => { dispatch(fetchWeather()) }
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(WeatherList)