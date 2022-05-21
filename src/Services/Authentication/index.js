import { data } from "autoprefixer"
import axios from "axios"



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