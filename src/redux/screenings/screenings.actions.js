import axios from 'axios';

export const ADD_SCREENING = 'ADD_SCREENING';
export const ADD_SCREENING_ERROR = 'ADD_SCREENING_ERROR';
export const GET_SCREENING = 'GET_SCREENING';
export const GET_SCREENING_ERROR = 'GET_SCREENING_ERROR';
export const EDIT_SCREENING= 'EDIT_SCREENING';
export const EDIT_SCREENING_ERROR = 'EDIT_SCREENING_ERROR';  


export const editSreenings = (editScreening) => (dispatch) => {
    axios.put(`http://localhost:5000/movies/edit/${editScreening._id}`, editScreening, { withCredentials: true })
      .then((res) => {
        dispatch({
          type: EDIT_SCREENING,
          payload: editScreening, 
        });
      })
      .catch(err => {
        console.log('Error to saved film');
        dispatch({
          type: EDIT_SCREENING_ERROR,
          payload: err.message
        });
      })
  };


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