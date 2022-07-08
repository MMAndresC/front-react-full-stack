
import axios from "axios";
export const ADD_FILM = "ADD_FILM";
export const DELETE_FILM = "DELETE_FILM";
export const EDIT_FILM = "EDIT_FILM";
export const ADD_FILM_ERROR = "ADD_FILM_ERROR";
export const EDIT_FILM_ERROR = "EDIT_FILM_ERROR";

export const addFilms = (newFilm) => (dispatch) => {
  //console.log(newFilm);

  axios.post("http://localhost:5000/movies/add", newFilm, {withCredentials: true,})
    .then((res) => {
      dispatch({
        type: ADD_FILM,
        payload: newFilm,
      });
    })
    .catch (err => {
      console.log('Error to saved film');
      dispatch({ 
          type: ADD_FILM_ERROR, 
          payload: err.message 
      });
  })
    // dispatch({
    //   type: ADD_FILM,
    //   payload: newFilm,
    // });
};

export const editFilms = (editFilm, id) => (dispatch) => {
//   axios.put("http://localhost:5000/movies/{id}", newFilm, {withCredentials: true,})
//   .then((res) => {
//     dispatch({
//       type: ADD_FILM,
//       payload: newFilm,
//     });
//   })
//   .catch (err => {
//     console.log('Error to saved film');
//     dispatch({ 
//         type: ADD_FILM_ERROR, 
//         payload: err.message 
//     });
// })
  dispatch({
    type: EDIT_FILM,
    payload: { editFilm, id },
  });
};

export const deleteFilms = (filmToDelete) => (dispatch) => {
  dispatch({
    type: DELETE_FILM,
    payload: filmToDelete,
  });
};
