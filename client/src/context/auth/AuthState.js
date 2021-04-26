import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';


const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        user:null,
        isAuthenticated: null,
        loading:true,
        error:null
    }

    const [state,dispatch] = useReducer(AuthReducer,initialState);

    //load user

    //register user

    //login user

    //logout

    //clear errors

    return (
        <AuthContext.Provider value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            user: state.user,
        }}>
            {props.children}
        </AuthContext.Provider>
    )

}


export default AuthState