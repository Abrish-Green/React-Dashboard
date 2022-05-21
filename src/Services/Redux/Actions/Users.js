import { GetUsers } from "../../Users Service"
import { LOAD_USERS_FAIL, LOAD_USERS_SUCCESS } from "../Constants"


export const loadUsers = () => {
    return async (dispatch) => {
        try{
            const UsersStatus = await GetUsers()
            
            if (UsersStatus.count) {
                dispatch({
                    type: LOAD_USERS_SUCCESS,
                    payload: {
                            users: UsersStatus.usersDtos,
                            count: UsersStatus.count,
                            loading: false,
                            status: UsersStatus.status.status
                    }
                })
            } else {
                    dispatch({
                            type: LOAD_USERS_FAIL,
                            payload: {
                                    users: [],
                                    count: 0,
                                    loading: false,
                                    status: false
                            }
                        }) 
            }
            
        } catch (e) {
                //Handle Error
            dispatch({
                    type: LOAD_USERS_FAIL,
                    payload: {
                            users: [],
                            count: 0,
                            loading: false,
                            status: false}
                })
        }
       
    }
}