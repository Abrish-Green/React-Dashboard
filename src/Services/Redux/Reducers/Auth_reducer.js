import { LOGIN_SUCCESS, LOGIN_FAIL, LOAD_USER, LOAD_FAIL } from '../Constants'
const intialState = {
    token: localStorage.getItem('token'),
    id: null,
    user_name: null,
    email: null,
    roles: [],
    isLoggedIn: false,
    message: null,
    loading: true

}

const AuthReducer = (state = intialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return action.payload
        case LOGIN_FAIL:
        case LOAD_FAIL:
            return action.payload
        case LOAD_USER:
            return action.payload
        default:
            return state;
    }
}
export default AuthReducer