import axios from 'axios'
import { BASE_URL, LOGIN_FAIL, LOGIN_SUCCESS } from '../Constants'

export const login = (user) => {
    return (dispatch) => {
        axios
        .post(`${BASE_URL}/signin`,user)
        .then( data => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {}
            })
        }).catch(error =>{
            dispatch({
                type: LOGIN_FAIL,
                payload: {
                    token: null,
                    id: null,
                    user_name: null,
                    email: null,
                    roles: null
                }
            })
        })
    }
}