import { fetchIp, fetchCity, fetchWeatherByName } from './api';

const fetchWeatherStarted = (tips) => ({
    type: 'FETCH_STARTED',
    payload : {
        tips,
    }
});
const fetchWeatherSuccess = (result) => ({
    type: 'FETCH_SUCCESS',
    payload:result
})
const fetchWeatherFailure = (tips) => ({
    type: 'FETCH_FAILURE',
    payload :{
        tips,
    }
})
export function fetchWeather(cityName) {
    return async (dispatch) => {
        if (cityName) {
            try {
                var tips = '正在加载' + cityName + '天气';
                dispatch(fetchWeatherStarted(tips))
                let weatherInfo = await fetchWeatherByName(cityName);
                dispatch(fetchWeatherSuccess(weatherInfo))
            } catch (error) {
                tips = cityName + '天气加载失败';
                dispatch(fetchWeatherFailure(tips))
            }
        } else {
            try {
                var tips = '正在定位中';
                dispatch(fetchWeatherStarted(tips))
                let ip = await fetchIp();
                let cityName = await fetchCity(ip);
                let weatherInfo = await fetchWeatherByName(cityName);
                dispatch(fetchWeatherSuccess(weatherInfo))
            }
            catch (error) {
                tips = '获取当前所在位置天气失败'
                dispatch(fetchWeatherFailure(tips))
            }
        }
    };
}
