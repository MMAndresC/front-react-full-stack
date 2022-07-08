import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth.reducer';
import { filmsReducer } from './films/films.reducer';

const store = configureStore({
    reducer:{
        auth: authReducer,
        film: filmsReducer,
    }
});

export default store;


// import { applyMiddleware, createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import authReducer from "./auth/auth.reducer";

// import filmsReducer from "./films/films.reducer";

// const rootReducer = combineReducers({
//   film: filmsReducer,
//   auth: authReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;