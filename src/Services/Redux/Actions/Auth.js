import axios from 'axios'
import { LoadUser, Login } from '../../Authentication'
import { LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOAD_FAIL } from '../Constants'

export const login = (user) => {
    return async (dispatch) => {
        try{
            const LoginStatus = await Login(user)
            if ('token' in LoginStatus) {
                window.localStorage.setItem('token', LoginStatus.token)
                window.localStorage.setItem('user', JSON.stringify({ id: LoginStatus.id, user_name: LoginStatus.user_name, roles: LoginStatus.roles }))
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

export const loadUser = (user) => {
    return async (dispatch) => {
        try{
            const UserInfo = await LoadUser()
            const user = JSON.parse(window.localStorage.getItem('user'))
               
            if (UserInfo?.id != null) {
                const {id,username,email} = UserInfo
                dispatch({
                    type: LOAD_USER,
                    payload: {
                        token: localStorage.getItem('token'),
                        id: id,
                        user_name: username,
                        email: email,
                        roles: user?.roles || null,
                        isLoggedIn: true,
                        message: null,
                        loading: false
                    }
                })
            } else {
                dispatch({
                    type: LOAD_FAIL,
                    payload: {
                        token: null,
                        id: null,
                        user_name: null,
                        email: null,
                        roles: [],
                        isLoggedIn: false,
                        message: null,
                        loading: false

                    }
                })
            }

            
        } catch (e) {
                //Handle Error
            dispatch({
                    type: LOAD_FAIL,
                    payload: {}
                })
        }
       
    }
}