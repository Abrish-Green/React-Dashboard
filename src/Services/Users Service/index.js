import axios from "axios"

//Get Users
export const GetUsers = async (user) => {
        let Users = []
        try{
            await axios({
                method: 'get',
                url: '/Users',
                headers : {
                    'Content-Type' : 'application/json; charset=UTF-8'
                }})
            .then(response => {
                Users = response?.data
            }).catch(error => {     
                Users = error
            })
        }catch(e){
                //Handle Error
            Users = e.message || null
    }
    return Users
}
