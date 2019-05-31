
export default function reducer(state, action) {
    let { type, payload } = action;
    let prev = state.locations.slice(0, state.locations.length - 1);
    console.log('prev is ',prev);
    switch (type) {
        case 'FETCH_STARTED':
            return { locations: [...state.locations, { status: 'loading' }] }
        case 'FETCH_SUCCESS':
            return { locations: [...prev,{ status: 'success' ,...payload}] }
        case 'FETCH_FAILURE':
            return { locations: [...prev, { status: 'failure'}] }
        default:
            return state;
    }
}