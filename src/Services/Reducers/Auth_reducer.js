import { LOGIN_SUCCESS, LOGIN_FAIL } from '../Constants'
const intialState = {
    token: localStorage.getItem('token'),
    id: null,
    user_name: null,
    email: null,
    roles: null
}

const AuthReducer = (state = intialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return [...state, action.payload]
        case LOGIN_FAIL:
            return action.payload
        default:
            return state;
    }
}
export default AuthReducer