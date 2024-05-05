// usersReducer.js
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from '../actions/admin/userAction';

const initialState = {
    users: [],
    error: null,
    loading: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,

                error: action.payload,
            }
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};

export default usersReducer;
