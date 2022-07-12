import axios from 'axios';

export const ADD_SCREENING = 'ADD_SCREENING';
export const ADD_SCREENING_ERROR = 'ADD_SCREENING_ERROR';
export const GET_SCREENING = 'GET_SCREENING';
export const GET_SCREENING_ERROR = 'GET_SCREENING_ERROR';


export const getScreenings = (movie) => dispatch => {

    axios.get(`http://localhost:5000/screenings/${movie._id}`, { withCredentials:true })
    .then(res => {
        dispatch({
            type: GET_SCREENING,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: GET_SCREENING_ERROR,
            payload: err.message
        });
    })
}


export const addScreenings = () => dispatch => {
    //En la zona de admin
}