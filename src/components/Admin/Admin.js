import { useForm } from "react-hook-form";

import { addFilms, getFilms } from "../../redux/films/films.actions";
import { useDispatch, useSelector } from "react-redux";
import Films from "../Films/Films";
import { useEffect } from "react";

// import "./Admin.scss";

const Admin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { film } = useSelector(state => state.film); 

  const dispatch = useDispatch();

  useEffect(() => {
    if(film.length === 0){
      dispatch(getFilms());
    }
   
  }, [film]);

  const onSubmit = (formData) => {
    if (formData.isActive === "true") {
      formData.isActive = true;
    } else {
      formData.isActive = false;
    }
    reset();
    dispatch(addFilms(formData));
  };

  return (
    <div className="home">
      <h1 className="h1one">Añade peliculas</h1>
      <div className="cardi">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <span>Titulo</span>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: "Please, enter a name",
                pattern: {
                  value: /^[a-zA-Z]{3,11}$/,
                  message: "Introduce un titulo válido",
                },
              })}
            />

            {errors.name && errors.name.type === "required" && (
              <span>{errors.name.message}</span>
            )}
            {errors.name && errors.name.type === "pattern" && (
              <span>{errors.name.message}</span>
            )}
          </div>

          <div>
            <span>Imagen</span>
            <input type="text" name="poster" {...register("poster")} />
          </div>
          <div>
            <span>Sinopsis</span>
            <input type="text" name="synopsis" {...register("synopsis")} />
          </div>
          <div>
            <span>Calificación</span>
            <input type="text" name="rated" {...register("rated")} />
          </div>
          <div>
            <span>Duración</span>
            <input type="number" name="duration" {...register("duration")} />
          </div>
          <div>
            <span>Genero</span>
            <input type="text" name="genre" {...register("genre")} />
          </div>
          <div>
            <span>Director</span>
            <input type="text" name="director" {...register("director")} />
          </div>
          <div>
            <span>Actores</span>
            <input type="text" name="actors" {...register("actors")} />
          </div>
          <div>
            <span>Fecha Inicio</span>
            <input type="date" name="iniDate" {...register("iniDate")} />
          </div>
          <div>
            <span>Fecha Fin</span>
            <input type="date" name="finDate" {...register("finDate")} />
          </div>
          <div>
            <select name="isActive" type="boolean" {...register("isActive")}>
              <option selected value="true">
                Disponible
              </option>
              <option value="false">No disponible</option>
            </select>
            {/* <span>En cartelera:</span>
            <input
              type="checkbox"
              name='isActive'
              checked='Disponible'
              value= 'true'
              {...register("isActive")}
            /> */}
          </div>

          <button className="button">Añadir</button>
        </form>
      </div>
      <div className="card">
        <Films />
      </div>
    </div>
  );
};

export default Admin;
