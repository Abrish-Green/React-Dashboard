import axios from 'axios'
import { Login } from '../../Authentication'
import { LOGIN_FAIL, LOGIN_SUCCESS } from '../Constants'

export const login = (user) => {
    return async (dispatch) => {
        try{
            const LoginStatus = await Login(user)
            if ('token' in LoginStatus) {
                window.localStorage.setItem('token', LoginStatus.token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { ...LoginStatus, isLoggedIn: true, message: "Login Success"}
                })
            } else {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: {
                        token: null,
                        id: null,
                        user_name: null,
                        email: null,
                        roles: [],
                        isLoggedIn: false,
                        message: "Wrong Credential"
                    }
                })
            }

            
        } catch (e) {
                //Handle Error
            dispatch({
                    type: LOGIN_FAIL,
                    payload: {}
                })
        }
       
    }
}