import { combineReducers } from 'redux'
import AuthReducer from './Auth_reducer'

export default combineReducers({
    auth: AuthReducer
})