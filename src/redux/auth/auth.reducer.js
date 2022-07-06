import * as actions from './auth.actions';

const INITIAL_STATE = {
    user: null,
    loading: false,
    error: ''
}

export const authReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type){
        case actions.LOGIN_USER: {
            return {...state, loading: true };
        }
        case actions.LOGIN_USER_OK: {
            return {...state, loading: false, user: payload}; 
        }
        case actions.LOGIN_USER_ERROR: {
            return {...state, loading: false, user: false, error: payload };
        }
        case actions.REGISTER_USER: {
            return {...state, loading: true };
        }
        case actions.REGISTER_USER_OK: {
            return {...state, loading: false, user: payload}; 
        }
        case actions.REGISTER_USER_ERROR: {
            return {...state, loading: false, user: false, error: payload };
        }
        case actions.LOGOUT_USER: {
            return {...state, loading: true};
        }
        case actions.LOGOUT_USER_OK: {
            return {...state, loading: false, user: false};
        }
        case actions.LOGOUT_USER_ERROR: {
            return {...state, loading: false, error: payload};
        }
        default: {
            return state;
        }
    }
}