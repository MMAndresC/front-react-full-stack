import axios from 'axios';

export const ADD_TICKET = 'ADD_TICKET';
export const ADD_TICKET_ERROR = 'ADD_TICKET_ERROR';
export const TEMPORAL_TICKET = 'TEMPORAL_TICKET';
export const GET_TICKETS_CLIENT = 'GET_TICKETS_CLIENT';
export const GET_TICKETS_CLIENT_ERROR = 'GET_TICKETS_CLIENT_ERROR';
export const EDIT_TEMPORAL_TICKET = 'EDIT_TEMPORAL_TICKET';


export const temporalTicket = (preTicket, takenSeats) => dispatch => {
    dispatch({
        type: TEMPORAL_TICKET,
        payload: {
            ticket: preTicket,
            occupied: takenSeats
        }
    });
}

export const editTemporalTicket = (editedTicket) => dispatch => {
    dispatch({
        type: EDIT_TEMPORAL_TICKET,
        payload: editedTicket
    });
}

export const addTicket = (newTicket) => dispatch => {

    axios.post('http://localhost:5000/tickets/add', newTicket, { withCredentials: true })
    .then(res => {
        dispatch({
            type: ADD_TICKET,
            payload: res.data,
        });
    })
    .catch(err => {
        dispatch({
            type: ADD_TICKET_ERROR,
            payload: err.message
        });
    }); 
}

export const getTicketsByClient = (user) => dispatch => {

    axios.get(`http://localhost:5000/tickets/${user._id}`, { withCredentials: true })
    .then(res => {
        dispatch({
            type: GET_TICKETS_CLIENT,
            payload: res.data
        });
    })
    .catch(err => {
        dispatch({
            type: GET_TICKETS_CLIENT_ERROR,
            payload: err.message
        });
    });
}

