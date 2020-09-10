import todosReducer from './todosReducer'
//import userReducer from './userReducer'
import { combineReducers } from 'redux'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    //user: userReducer,
    todosReducer,
    authReducer
})

export default rootReducer