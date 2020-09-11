export default function todosReducer(state = [], action) 
{
    switch(action.type) {
        case "LOAD_TODOS":
            return [...action.todos]
        case "SHOW_TODO":
            return action.todo;
        case "ADD_TODO":
            return [...state, action.todo];
        case "EDIT_TODO":
            return state.map(todo => {
                if (todo.id === action.todo.id) {
                    return action.todo
                } else {
                    return todo
                }
                })
        case "LOGIN_SUCCESS":
            return [...action.user.todos]
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);


        default:
            return state;    
    }
}