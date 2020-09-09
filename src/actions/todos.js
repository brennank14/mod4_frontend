export const loadTodos = todos => {
    return {
        type: "LOAD_TODOS",
        todos
    }
}

export const addTodo = todo => {
    return {
        type: "ADD_TODO", 
        todo
    }
}

export const editTodo = todo => {
    return {
        type: "EDIT_TODO",
        todo
    }
}

export const deleteTodo = id => {
    return {
        type: "DELETE_TODO",
        id
    }
}