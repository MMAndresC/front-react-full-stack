import * as actions from './tickets.actions';

const INITIAL_STATE = {
    ticket:[],
    error: '',
    isTempTicket: false,
    takenSeats: []
};

export const ticketsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actions.ADD_TICKET: {
<<<<<<< HEAD
            return {...state, ticket: action.payload, isTempTicket: false };
=======
            return {...state, ticket: {...state.ticket, qr: action.payload._id}, isTempTicket: false };
>>>>>>> prueba-merge-fatal-error
        }
        case actions.ADD_TICKET_ERROR: {
            return {...state, error: action.payload, isTempTicket: false };
        }
        case actions.TEMPORAL_TICKET: {
            const { occupied, ticket } = action.payload;
            return {...state, takenSeats: occupied, ticket: ticket, isTempTicket: true };
        }
        case actions.GET_TICKETS_CLIENT: {
            return {...state, ticket: action.payload, isTempTicket: false};
        }
<<<<<<< HEAD
=======
        case actions.RESET_TEMP_TICKET: {
            return { ...state, ticket:null, isTempTicket: false };
        }
>>>>>>> prueba-merge-fatal-error
        case actions.GET_TICKETS_CLIENT_ERROR: {
            return {...state, error: action.payload, isTempTicket: false};
        }
        case actions.EDIT_TEMPORAL_TICKET: {
<<<<<<< HEAD
            console.log(action.payload);
=======
>>>>>>> prueba-merge-fatal-error
            return {...state, ticket: action.payload}
        }
        default:
            return {...state };
    }
}