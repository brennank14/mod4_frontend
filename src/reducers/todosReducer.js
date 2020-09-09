export default function todosReducer(
    state = [],
    action) {
        switch (action.type) {
            case "LOAD_TODOS":
                return action.todos
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
            case "DELETE_TODO": 
                return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}