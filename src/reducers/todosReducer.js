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
            return state.map(todo => 
                todo.id === action.id ? action.todo : todo
            )
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);


        default:
            return state;    
    }
}