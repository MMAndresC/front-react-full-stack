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
        case actions.GET_SCREENING_ERROR: {
            return {...state, error: action.payload };
        }
        default:
            return {...state};
    }
}