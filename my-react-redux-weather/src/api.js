export async function fetchIp() {
    const endpoint = 'https://api.ipify.org/?format=json';
    try {
        let response = await fetch(endpoint);
        let json = await response.json();
        return json.ip;
    } catch (error) {
        throw new Error(`unable to fetch ip : error message is ${error.message}`)
    }
}
export async function fetchCity(ip) {
    const endpoint = (ip) => `https://weather-api-nodejs.herokuapp.com/api/ip?ip=${ip}`;
    try {
        let response = await fetch(endpoint(ip));
        let json = await response.json();
        return json.city
    } catch (error) {
        throw new Error(`unable to fetch location : error message is ${error.message}`)
    }
}
export async function fetchWeatherByName(cityName) {
    const endpoint = (cityName) => `https://api.openweathermap.org/data/2.5/weather?APPID=bddd38779356bc4dffa289d110e0edba&q=${cityName}`;
    try {
        let response = await fetch(endpoint(cityName));
        let json = await response.json();
        return {
            weather : json.weather,
            name : json.name,
            country: json.sys.country
        };
    } catch (error) {
        throw new Error(`unable to fetch weather by city name : error message is ${error.message}`)
    }
}