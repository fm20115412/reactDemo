
let todoid = 0;

export const addTodo = value=>(
    {
        type : 'ADD_TODO',
        payload : {
            value,
            id: ++todoid
        }
    }
)
export const toggleTodo = id => (
    {
        type: 'TOGGLE_TODO',
        payload : {
            id
        }
    }
)
export const toggleFilter = filter => (
    {
        type : 'TOGGLE_SHOW',
        payload : {
            filter
        }
        
    }
)
export const deleteTodo = id => (
    {
        type:'DELETE_TODO',
        payload:{
            id
        }
    }
)