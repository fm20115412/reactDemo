export default class FetchLocation{
    constructor(){
        this.data = null;
        this.endpoint = (ip)=> `https://weather-api-nodejs.herokuapp.com/api/ip?ip=${ip}`
    }
    async fetchLocationCatchErrors(ip){
        try{
            let response = await fetch(this.endpoint(ip));
            let json = await response.json();
            this.data = json;
        }catch(error){
            throw new Error(`unable to fetch location : error message is ${error.message}`)
        }
    }
}