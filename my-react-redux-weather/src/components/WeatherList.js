import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchWeather } from '../action';
import AddWeather from './AddWeather';
import './WeatherList.css';

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
        const locationList = this.props.locations.map((location, index) => {
            let status = location.status;
            console.log('index is ',index)
            console.log('status is',status)
            switch (status) {
                case 'loading':
                    return <div>天气信息请求中...</div>;
                case 'success': {
                    return (
                        <div>
                            <span>{location.name}</span>
                            <img src={`https://www.countryflags.io/${location.country}/shiny/48.png`} />
                            <p>{location.weather[0].description}</p>
                        </div>
                    )
                };
                case 'failure':
                    return <div>天气信息装载失败</div>
                default:
                    throw new Error('unexpected status ' + status);
            }
        })
        return(
            <div className='weather-list'>
                <div>{locationList}</div>
                <AddWeather />
            </div>
        )
    }
}
const mapStateTopProps = (state) => {
    return {
        locations:state.locations,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        init: () => { dispatch(fetchWeather()) }
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(WeatherList)