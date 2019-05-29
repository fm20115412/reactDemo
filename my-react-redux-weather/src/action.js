import { fetchIp, fetchCity, fetchWeatherByName } from './api';

const fetchWeatherStarted = () => ({
    type: 'FETCH_STARTED'
});
const fetchWeatherSuccess = (result) => ({
    type: 'FETCH_SUCCESS',
    payload:result
})
const fetchWeatherFailure = (error) => ({
    type: 'FETCH_FAILURE',
    error
})

export function fetchWeather(cityName) {
    return async (dispatch) => {
        if (cityName) {
            try {
                let weatherInfo = await fetchWeatherByName(cityName);
                dispatch(fetchWeatherSuccess(weatherInfo))
            } catch (error) {
                dispatch(fetchWeatherFailure(error))
            }
        } else {
            // 没有cityName,代表初始化数据
            dispatch(fetchWeatherStarted())
            try {
                let ip = await fetchIp();
                let cityName = await fetchCity(ip);
                let weatherInfo = await fetchWeatherByName(cityName);
                dispatch(fetchWeatherSuccess(weatherInfo))
            }
            catch (error) {
                
            }
        }
    };
}
