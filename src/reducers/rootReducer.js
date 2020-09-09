import todosReducer from './todosReducer'
//import userReducer from './userReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    //user: userReducer,
    todos: todosReducer
})

export default rootReducer