export default class FetchWeather{
    constructor(){
        this.data = null;
        this.endpoint = (latitude, longitude) => `https://weather-api-nodejs.herokuapp.com/api?latitude=${latitude}&longitude=${longitude}`;
    }
    async fetchWeatherCatchErrors(latitude,longitude){
        try{
            let response = await fetch(this.endpoint(latitude,longitude));
            let json = await response.json();
            this.data = json;
        }catch(error){
            throw new Error(`unable to fetch weather : error message is ${error.message}`)
        }
    }
}