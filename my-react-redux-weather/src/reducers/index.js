
export default function reducer(state, action) {
    let { type, payload } = action;
    switch (type) {
        case 'FETCH_START':
            return { ...state, status: 'loading' }
        case 'FETCH_SUCCESS':
            return { 
                ...state,
                status: 'success', 
                locations: [...state.locations, payload] 
            }
        case 'FETCH_FAIL':
            return { ...state, status: 'failure' }
        default:
            return state;
    }
}