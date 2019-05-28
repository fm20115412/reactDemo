export default function loginReducer(state = {logstate:0},action){
    switch (action.type){
        case 'LOG_IN':
            return Object.assign({},state,{
                logstate:action.payload.lostate
            });
        default:
            return state;
    }
}