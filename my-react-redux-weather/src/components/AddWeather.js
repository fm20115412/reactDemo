import React ,{Component} from 'react';
import { directive } from '@babel/types';
import { connect } from 'react-redux';
import { fetchWeather } from '../action';


class AddWeather extends Component{
    constructor(){
        super()
        this.state = {
            value:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.addCity = this.addCity.bind(this)
    }
    handleChange(value){
        this.setState(
            {value}
        )
    }
    addCity(){
        this.props.add(this.state.value)
        this.setState({
            value:''
        })
    }
    render(){
        return(
            <div>
                <input type="text" value = {this.state.value} onChange={(e)=>this.handleChange(e.target.value)}/>
                <button onClick = {this.addCity}>Add city</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (cityName) => { dispatch(fetchWeather(cityName)) }
    }
}
export default connect(null, mapDispatchToProps)(AddWeather)
