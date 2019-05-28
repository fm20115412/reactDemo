function reducer(state, action) {
    let { type, payload } = action;
    switch (type) {
        case 'INIT_LOCATION':
            return {
                locations: [...state.locations, payload],
                isDataLoaded: true,
            }
        case 'ADD_LOCATION':
            return {
                ...state,
                locations : [...state.locations,payload]
            }
        default:
            return state;
    }
}
export default reducer;