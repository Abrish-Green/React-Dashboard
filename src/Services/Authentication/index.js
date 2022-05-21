import { data } from "autoprefixer"
import axios from "axios"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { LOAD_USER } from "../Redux/Constants"


//Login Service
export const Login = async (user) => {
        let result = null
        try{
            await axios({
                method: 'post',
                url: '/Users/signin',
                headers : {
                    'Content-Type' : 'application/json; charset=UTF-8'
                },
                data: user })
            .then(response => {
                result = response?.data
            }).catch(error => {     
                result = error
            })
        }catch(e){
                //Handle Error
            result = e.message || null
    }
    return result
}

//Load User

export const LoadUser = async () => {
    let UserInfo = null
    try {
        const token = window.localStorage.getItem('token')
        const user = JSON.parse(window.localStorage.getItem('user'))
        if (user?.id != null) {
            await axios({
            method: 'get',
            url: `/Users/${user.id}`,
            headers : {
                    'Content-Type' : 'application/json; charset=UTF-8'
            }
        })
            .then(response => {
                if ('usersDtoList' in response?.data) {
                    UserInfo = response?.data.usersDtoList  
                }
            }).catch(error => {     
            })  
        }
        
    } catch (e) {
        return null;
    }
    return UserInfo
}