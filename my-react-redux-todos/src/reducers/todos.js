export default function dealTodos(state = [{value:"123",completed:false,id:0}], action) {
    switch (action.type) {
        // {type : 'ADD_TODO' ,payload : '洗衣服'}
        case 'ADD_TODO': {
            let  { value,id } = action.payload;
            return [
                ...state,
                {
                    value,
                    completed: false,
                    id:id
                }
            ]
        }
        // {type : 'TOGGLE_TODO' ,payload : 2}
        case 'TOGGLE_TODO': {
            let  { id } = action.payload;
            return state.map((todo, index) => {
                return (index === id) 
                ? { ...todo, completed: !todo.completed } 
                : todo
            })
        }
        // {type : 'DELETE_TODO' ,payload : 2}
        case 'DELETE_TODO': {
            let  { id } = action.payload;
            return state.filter((todo,index) => {
                return index !== id
            })
        }
        case 'DELETE_COMPLETED':{
            return state.filter((todo)=> !todo.completed)
        }
        default :return state;
    }
}