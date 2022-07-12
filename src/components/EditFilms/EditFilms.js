import React, { useState } from 'react'
import  {useDispatch, useSelector} from 'react-redux';
import { editFilms } from '../../redux/films/films.actions';
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./EditFilms.scss";
import { addScreenings } from '../../redux/screenings/screenings.actions';
// import { addScreenings } from '../../redux/screenings/screenings.actions';



const EditFilms = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, reset, } = useForm();
    
    const onSubmit = (formData) => {
     console.log(formData);
        reset();

        dispatch(addScreenings(formData));
        dispatch(editFilms(form))
        navigate('/private');
      }; 
   
    const {id} = useParams();   
    const {film} = useSelector(state => state.film);
 
   const [form, setForm] = useState(film[id]);
   const dispatch = useDispatch();
   
    
    

    const handleSubmitfil = (ev) => {
        ev.preventDefault();
        
        dispatch(editFilms(form))
        navigate('/private');
    }
  

    const handleChange = (ev) => {
        const  {name, value} = ev.target
        setForm({...form, [name]:value})
    }
  
    
    
    
  return (
<div className="container">
<div>
    <form onSubmit={handleSubmitfil}>
    <span>Editar pelicula</span>
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
    </div>
    
    
    
    
    
    <div>
    <form onSubmit={handleSubmit(onSubmit)} >
    <span>Crear Sesión para {form.name}</span>
    {/* <label>
            <span>Id pelicula</span>
            <input type="text" name="idMovie" value={form._id} disabled onChange={handleChange} {...register("idMovie")}/>
        </label> */}
        <label>
            <select name="movie" {...register("movie")}>
                <option value={form.name} selected> {form.name}</option>
            </select> 
        </label>
        <label>
            <select name="idMovie" {...register("idMovie")}>
                <option value={form._id} selected> {form._id}</option>
            </select> 
        </label>
     

        {/* <label>
            <span>Titulo pelicula</span>
            <input type="text" name="movie" value={form.name} disabled onChange={handleChange}{...register("movie")}/>
        </label> */}
        <label>
            <span >Id sala</span>
            <select name="idHall" {...register("idHall")}>
           <option value="62c77a0fb0c95021c0dd72b7" selected >Sala 1</option>
           <option value="62c9aa7a3c6d18157df1b4bf">Sala 2</option>
           <option value="62cd2c8de3d23b5cf9fd3f97">Sala 3</option>
           <option value="62cd2d06e3d23b5cf9fd3f98">Sala 4</option>
           <option value="62cd2d41e3d23b5cf9fd3f99">Sala 5</option>
           <option value="62cd2d86e3d23b5cf9fd3f9a">Sala 5</option>
           <option value="62cd2ddfe3d23b5cf9fd3f9b">Sala 7</option>
           <option value="62cd2e14e3d23b5cf9fd3f9c">Sala 8</option>
        
            </select>
        </label>
        <label>
            <span>Dia sesion</span>
            <input type="date" name="date" onChange={handleChange} {...register("date")}/>
        </label>
        <label>
            <span>Hora sesión</span>
            <input type="time" name="hour" onChange={handleChange} {...register("hour")}/>
        </label>
        
        


    <button>Crea sesion</button>
    </form>
    </div>
    
    
    
    
    
    
    </div>

  )
}

export default EditFilms
