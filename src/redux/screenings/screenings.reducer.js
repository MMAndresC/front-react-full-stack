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
        case actions.EDIT_SCREENING: {
            const screenCopy = state.screenings.filter((scr) => scr._id !== action.payload._id);
            // encontrar en filmcopy la pelicula con id del que viene en el  payload y sobreescribir esa con action     
            return { ...state, screenings: [...screenCopy, action.payload] };
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

