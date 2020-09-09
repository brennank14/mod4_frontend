export default function todosReducer(state = [], action) 
{
    switch(action.type) {
        case "LOAD_TODOS":
            return [...action.todos];
        // case "ADD_TODO":
        //     return [...action.todos];
        // case "EDIT_TODO":
        //     return [...action.todos];
        // case "DELETE_TODO":
        //     return [...action.todos];



        default:
            return state;    
    }
}