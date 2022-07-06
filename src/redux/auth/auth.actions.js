import axios from 'axios';


export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_OK = 'LOGIN_USER_OK';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_OK = 'REGISTER_USER_OK';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_OK = 'LOGOUT_USER_OK';
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR';


export const loginUser = (goClientZone, formData) => (dispatch) => {
    
    dispatch({ type: LOGIN_USER, payload: formData });
    
    axios.post('http://localhost:5000/users/login', formData, { withCredentials: true })
        .then(res => {
            dispatch({ 
                type: LOGIN_USER_OK, 
                payload: res.data 
            });
            goClientZone();
        })
        .catch(err => {
            console.log('Error to access bd to login');
            dispatch({ 
                type: LOGIN_USER_ERROR, 
                payload: err.message 
            });
        })
}

export const registerUser = (goClientZone, formData) => (dispatch) => {
    dispatch({ type: REGISTER_USER, payload: formData });

    axios.post('http://localhost:5000/users/register', formData, { withCredentials: true })
    .then(res => {
        dispatch({
            type: REGISTER_USER_OK,
            payload: res.data
        });
        goClientZone();
    })
    .catch(err => {
        dispatch({
            type: REGISTER_USER_ERROR,
            payload: err.message
        });
    })
}

export const logoutUser = (goClientZone) => dispatch => {
    dispatch({ type: LOGOUT_USER });
    
    axios.post('http://localhost:5000/users/logout', {}, { withCredentials: true })
    .then(res => {
        dispatch({ type: LOGOUT_USER_OK });
        goClientZone();
    })
    .catch(err => {
        dispatch({ 
            type: LOGOUT_USER_ERROR, 
            payload: err.message 
        });
    });
}