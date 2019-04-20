export default function toggleShow(state = 'ALL',action){
    // {type:'TOGGLE_SHOW',payload : 'active'}
    switch (action.type){
        case 'TOGGLE_SHOW': {
            let {filter} = action.payload
            return filter;
        }
        default : return state
    }
}
