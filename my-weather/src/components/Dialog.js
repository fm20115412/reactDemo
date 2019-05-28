import React , {Component} from 'react';
import searchCity from '../api/searchCity';
import { connect } from 'react-redux';
import FetchWeather from '../api/fetchWeaher';
import {addLocation} from '../action';

class Dialog extends Component{
    constructor(){
        super()
        this.state = {
            value:'',
            cityLists:null,
        }
        this.fetchWeather = new FetchWeather();
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAddLocation = this.handleAddLocation.bind(this);
    }
    handleChange(value){
        this.setState({
            value
        })
    }
    async handleSearch(){
        let result = await searchCity(this.state.value)
        this.setState({
            cityLists:result.list
        })
    }
    async handleAddLocation(key){
        console.log(key)
        let {lat, lon} = this.state.cityLists[key]['coord'];
        let flag = (country, style = 'shiny', size = 24) => { // styles flat and shiny, sizez 64 48 32 24 16
            return `https://www.countryflags.io/${country}/${style}/${size}.png`; // https://countryflags.io/
          }
        await this.fetchWeather.fetchWeatherCatchErrors(lat,lon);
        let location = {
            'current_time': (new Date).toDateString(),
            'region_name': this.state.cityLists[key]['name'],
            'country_flag':flag(this.state.cityLists[key]['sys']['country']),
            'weather':this.fetchWeather.data['currently']
        }
        this.props.addLocation(location)
    }
    render(){
        const lists = this.state.cityLists ? this.state.cityLists.map((cityList,key)=>{
            return(
                <div onClick = {(e) => this.handleAddLocation(key)}>
                    <span>{cityList.name}</span>----
                    <span>{cityList.weather[0]['description']}</span>
                </div>
            )
        }) : null;
        return (
            <div>
                <input type="text" value = {this.state.value} onChange = {(e) => this.handleChange(e.target.value)}/>
                <button onClick = {this.handleSearch}>search</button>
                <button>X</button>
                {lists}
            </div>
        )
    }
}
const mapDispatchToProps = {addLocation}
export default connect(null,mapDispatchToProps)(Dialog);