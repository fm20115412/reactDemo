function dealTodos(state = [{text:"123",completed:false}], action) {
    let { type, payload } = action
    switch (type) {
        // {type : 'ADD_TODO' ,payload : '洗衣服'}
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: payload,
                    completed: false
                }
            ]
        // {type : 'TOGGLE_TODO' ,payload : 2}
        case 'TOGGLE_TODO':
            return state.map((todo, index) => {
                return (index === payload) 
                ? { ...todo, completed: !todo.completed } 
                : todo
            }
        )
        // {type : 'DELETE_TODO' ,payload : 2}
        case 'DELETE_TODO':
            return state.filter((todo,index) => {
                return index !== payload
            })
        case 'DELETE_COMPLETED':
            return state.filter((todo)=> !todo.completed)
        default :return state;
    }
}
export default dealTodos