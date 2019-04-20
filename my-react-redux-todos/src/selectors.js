export default function genTodos(todos,filter){
    switch (filter) {
        case 'ALL':
            return todos;
        case 'COMPLETED':
            return todos.filter(todo=> todo.completed);
        case 'ACTIVE':
            return todos.filter(todo=> !todo.completed);
        default :
            return todos;
    }

}