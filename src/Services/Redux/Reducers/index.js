import { combineReducers } from 'redux'
import AuthReducer from './Auth_reducer'
import UsersReducer from './UsersReducer'

export default combineReducers({
    auth: AuthReducer,
    users: UsersReducer
})