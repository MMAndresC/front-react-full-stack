import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_OK = 'LOGINR_USER_OK';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';


export const loginUser = (goClientZone, formData) => (dispatch) => {
    
    dispatch({ type: LOGIN_USER, payload: formData });
    
    axios.post('http://localhost:5000/users/login', formData, { withCredentials: true })
        .then(res => {
            console.log('data',res.data);
            dispatch({ type: LOGIN_USER_OK, payload: res.data });
            goClientZone();
        })
        .catch(err => {
            console.log('actions',formData);
            console.log('Error to access bd to login');
            dispatch({ type: LOGIN_USER_ERROR, payload: err.message });
        })
}