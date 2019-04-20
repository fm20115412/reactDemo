function toggleShow(state = 'all',action){
    let {type,payload} = action
    // {type:'TOGGLE_SHOW',payload : 'active'}
    switch (type){
        case 'TOGGLE_SHOW': return payload;
        default : return state
    }
}
export default toggleShow