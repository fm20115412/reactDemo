const sessionStorage = window.sessionStorage;
const createStorageMiddleware = store => next => action => {
    if (action.type === 'FETCH_SUCCESS') {
        let locations = [];
        if(sessionStorage.getItem('locations')){
            locations = JSON.parse(sessionStorage.getItem('locations'))
        }
        locations.push({
            status:'success',
            ...action.payload
        })
        sessionStorage.setItem('locations', JSON.stringify(locations));
    }
    if (action.type === 'FETCH_FAILURE') {
        let locations = [];
        if(sessionStorage.getItem('locations')){
            locations = JSON.parse(sessionStorage.getItem('locations'))
        }
        locations.push({
            status:'failure',
            ...action.payload
        })
        sessionStorage.setItem('locations', JSON.stringify(locations));
    }
    return next(action);
}
export default createStorageMiddleware;