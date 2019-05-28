export default class FetchIp {
    constructor(){
        this.ip = '';
        this.endpoint = 'https://api.ipify.org/?format=json'
    }
    async fetchIpCatchErrors(){
        try{
            let response = await fetch(this.endpoint);
            let json = await response.json();
            this.ip = json.ip;
            console.log('ip',this.ip);
        }catch(error){
            throw new Error(`unable to fetch ip : error message is ${error.message}`)
        }
    }
}