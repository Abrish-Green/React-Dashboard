import { combineReducers } from 'redux'
import authReducer from './Auth_reducer'

export default combineReducers({
    auth: authReducer
})