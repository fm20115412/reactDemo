import FetchIp from './fetchIp';
import FetchLocation from './fetchLocation';
import FetchWeather from './fetchWeaher';

export default class Storage{
    constructor(){
        this.data=null;
        this.sessionStorage = window.sessionStorage;
        this.fetchIp = new FetchIp();
        this.fetchLocation = new FetchLocation();
        this.fetchWeather = new FetchWeather();
    }
    mergeData(){
        return {
            'current_time': (new Date).toDateString(),
            'region_name': this.fetchLocation.data['region_name'],
            'country_flag':this.fetchLocation.data['location']['country_flag'],
            'weather':this.fetchWeather.data['currently']
        }
    }
    async getIp(){
        if(this.sessionStorage.getItem('ip')){
            this.fetchIp.ip = this.sessionStorage.getItem('ip')
        }else{
            await this.fetchIp.fetchIpCatchErrors();
            this.sessionStorage.setItem('ip',this.fetchIp.ip);
        }
    }
    async getLocation(){
        if(this.sessionStorage.getItem('location')){
            this.fetchLocation.data = JSON.parse(this.sessionStorage.getItem('location'));
        }else{
            await this.fetchLocation.fetchLocationCatchErrors(this.fetchIp.ip);
            this.sessionStorage.setItem('location',JSON.stringify(this.fetchLocation.data));
        }
    }
    async getWeather(){
        if(this.sessionStorage.getItem('weather')){
            this.fetchWeather.data = JSON.parse(this.sessionStorage.getItem('weather'));
        }else{
            let {latitude,longitude} = this.fetchLocation.data;
            await this.fetchWeather.fetchWeatherCatchErrors(latitude,longitude);
            this.sessionStorage.setItem('weather',JSON.stringify(this.fetchWeather.data));
        }
    }
    async fetchData(){
        await this.getIp();
        await this.getLocation();
        await this.getWeather();
        this.data = this.mergeData();
    }
}