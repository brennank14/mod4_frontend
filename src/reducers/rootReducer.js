import todosReducer from './todosReducer'
import { combineReducers } from 'redux'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    todos: todosReducer,
    auth: authReducer
})

export default rootReducer