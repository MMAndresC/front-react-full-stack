import React from "react";

import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFilms} from "../../redux/films/films.actions";

const Films = () => {
  const { film } = useSelector(state => state.film);
 const user = useSelector(state => state.auth.user);
  //console.log(film);
  const dispatch = useDispatch();
  return (
    <>
      <h3>Peliculas</h3>
      {film.length > 0 &&
        film.map((fil, index) => {
          return (
            <div key={index}>
              <p>
                <strong>Titulo </strong>
                {fil.name}
              </p>
              <img  src={fil.poster} alt="film" />
              <p>
                <strong>Synopsis </strong>
                {fil.synopsis}
              </p>
              <p>
                <strong>Calificación </strong>
                {fil.rated}
              </p>
              <p>
                <strong>Duracion</strong>
                {fil.duration}
              </p>
              <p>
                <strong>Genero</strong>
                {fil.genre}
              </p>
              <p>
                <strong>Director</strong>
                {fil.director}
              </p>
              <p>
                <strong>Actors</strong>
                {fil.actors}
              </p>
              <p>
                <strong>Fecha estreno</strong>
                {fil.iniDate}
              </p>
              <p>
                <strong>Fecha fuera de cartelera</strong>
                {fil.finDate}
              </p>
              <div>
                {fil.isActive ==="true" && <p>Disponible en cartelera</p>}
                {fil.isActive ==="false" && <p>No disponible en cartelera</p>}
              </div>
              {user && <button
                className="button"
                onClick={() => {
                  dispatch(deleteFilms(fil));
                }}
              >
                Eliminar
              </button>}
              {user && <Link to={`/editFilms/${index}`}><button>Modificar</button></Link>}
              {/* {user && <button
                className="button"
                onClick={() => {
                  dispatch(editFilms(fil));
                }}
              >
               Editar
              </button>} */}
              
            </div>
          );
        })}
    </>
  );
};
export default connect(state => ({user: state.auth.user}))(Films);
