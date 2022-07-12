import React, { useState } from 'react'
import  {useDispatch, useSelector} from 'react-redux';
import { editFilms } from '../../redux/films/films.actions';
import { useNavigate, useParams } from "react-router-dom";
import "./EditFilms.scss";
const EditFilms = () => {
    const {id} = useParams();   

    
    const {film} = useSelector(state => state.film);
    //console.log(film);
    //const filmToUpdate = film[id];


    const [form, setForm] = useState(film[id]);
   
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault();
        dispatch(editFilms(form))
        navigate('/private');
    }

    const handleChange = (ev) => {
        const  {name, value} = ev.target
        setForm({...form, [name]:value})
    }
    //console.log(form);
    
  return (

    <form onSubmit={handleSubmit}>
        <label>
            <span>Titulo</span>
            <input type="text" name="name" value={form.name} onChange={handleChange}/>
        </label>
        <label>
            <span>Caratula</span>
            <input type="text" name="poster" value={form.poster} onChange={handleChange}/>
        </label>
        <label>
            <span>Synopsis</span>
            <input type="text" name="synopsis" value={form.synopsis} onChange={handleChange}/>
        </label>  
        <label>
            <span>Calificación</span>
            <input type="text" name="rated" value={form.rated} onChange={handleChange}/>
        </label>
        <label>
            <span>Duaración</span>
            <input type="number" name="duration" value={form.duration} onChange={handleChange}/>
        </label>
        <label>
            <span>Genero</span>
            <input type="text" name="genre" value={form.genre} onChange={handleChange}/>
        </label>
        <label>
            <span>Director</span>
            <input type="text" name="director" value={form.director} onChange={handleChange}/>
        </label>
        <label>
            <span>Actores</span>
            <input type="text" name="actors" value={form.actors} onChange={handleChange}/>
        </label>
        <label>
            <span>Fecha de estreno</span>
            <input type="date" name="iniDate" value={form.iniDate} onChange={handleChange}/>
        </label>
        <label>
            <span>Fecha salida de cartelera</span>
            <input type="date" name="finDate" value={form.finDate} onChange={handleChange}/>
        </label>
        {/* <select name="isActive" type="boolean" onChange={handleChange} >
            <option checked  value= "true" >Disponible</option>
            <option value= "false">No disponible</option>
          </select>  */}
        <label>
            <span>Disponibilidad</span>
            <input type="boolean" name="isActive" value={form.isActive} onChange={handleChange}/>
        </label>
        
        <button>Guarda cambios</button>
    </form>
  )
}

export default EditFilms
