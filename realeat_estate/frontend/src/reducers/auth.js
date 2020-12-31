import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false
}

export default function(state=initialState, action){
    const { tyoe, payload } = action

    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.access)
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                token: payload.access
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                loading: true
            }
        case SIGNUP_FAIL:
        case LOGOUT:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state
    }
}