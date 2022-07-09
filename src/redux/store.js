import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth.reducer';
import { filmsReducer } from './films/films.reducer';
import { screeningsReducer } from './screenings/screenings.reducer';

const store = configureStore({
    reducer:{
        auth: authReducer,
        film: filmsReducer,
        screenings: screeningsReducer,
    }
});

export default store;


