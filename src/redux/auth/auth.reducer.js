import * as actions from './auth.actions';

const INITIAL_FORM_STATE = {
    email: '',
    password: ''
}

const INITIAL_STATE = {
    user: null,
    loading: false,
    error: '',
    registerForm: INITIAL_FORM_STATE ,
    //loginForm: INITIAL_FORM_STATE
}

export const authReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type){
        case actions.LOGIN_USER: {
            console.log('grabar form??', payload);
            return {...state, loading: true };
        }
        case actions.LOGIN_USER_OK: {
            console.log('In', payload);
            return {...state, loading: false, user: payload}; //, loginForm: [...INITIAL_FORM_STATE, false, true, false] };
        }
        case actions.LOGIN_USER_ERROR: {
            console.log('Out');
            return {...state, loading: false, user: false, error: payload };
        }
        default: {
            return state;
        }
    }
}