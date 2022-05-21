import { LOAD_USERS_SUCCESS, LOAD_USERS_FAIL } from '../Constants'

const InitialState = {
    users: [],
    count: 0,
    loading: true,
    status: false
}

const UsersReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LOAD_USERS_SUCCESS:
            return action.payload
        case LOAD_USERS_FAIL:
            return action.payload
        default:
            return state;
    }
}

export default UsersReducer