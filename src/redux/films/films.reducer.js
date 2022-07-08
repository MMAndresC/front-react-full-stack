import * as actions from "./films.actions";

const INITIAL_STATE = {
  film: "",
  error:"",
};

export const filmsReducer = (state = INITIAL_STATE, action) => {
  const { film } = state;

  switch (action.type) {
    
    case actions.ADD_FILM:
      return { ...state, film: [...film, action.payload] };

    case actions.EDIT_FILM:
      const { id, editFilm } = action.payload;
      const filmCopy = [...film];
      filmCopy.splice(id, 1, editFilm); //hago un splice, borro el antiguo y añado el nuevo en su posicion, y añado el modicado
      return { ...state, film: [...filmCopy] };

    case actions.DELETE_FILM:
      const filmsFiltered = film.filter((exp) => exp !== action.payload);
      return { ...state, film: [...filmsFiltered] };

      case actions.ADD_FILM_ERROR: 
        return {...state, error: action.payload };
        
        case actions.EDIT_FILM_ERROR: 
        return {...state, error: action.payload };



    default:
      return state;
  }
};
