import * as actions from './screenings.actions'; 

const INITIAL_STATE = {
    screenings:[],
    error: ''
}

export const screeningsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
       
        case actions.GET_SCREENING: {
            return {...state, screenings: action.payload }; 
        }
       /*  case actions.EDIT_SCREENING: {
            console.log('payload', action.payload);
            console.log('state',state.screenings);
            const screenCopy = state.screenings.filter((scr) => scr._id !== action.payload._id);
            // encontrar en filmcopy la pelicula con id del que viene en el  payload y sobreescribir esa con action     
            return state;//{ ...state, screenings: [...screenCopy, action.payload] };
        } */
        case actions.UPDATE_SEATS: {
            //Da error
            const {id, seats} = action.payload;
            const updated = state.screenings.filter(item => item._id === id);
           if(updated[0].takenSeat){
                updated[0].takenSeat = [...updated[0].takenSeat, ...seats]
           }else{
                updated[0].takenSeat = seats;
           }
           const rest = state.screenings.filter(item => item._id !== id);
            return {...state, screenings: [...rest, ...updated] };
            //return {...state };
        }
        case actions.UPDATE_SEATS_ERROR : {
            return {...state, error:action.payload };
        }
        case actions.GET_SCREENING_ERROR: {
            return {...state, error: action.payload };
        }
        case actions.EDIT_SCREENING_ERROR:{
            return { ...state, error: action.payload };   
        }
        default:
            return {...state};
    }
}

