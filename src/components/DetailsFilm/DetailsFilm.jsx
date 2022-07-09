import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getScreenings } from '../../redux/screenings/screenings.actions';
import './detailsFilm.scss';

const DetailsFilm = () => {

    const { id } = useParams();
    const { film } = useSelector(state => state.film);
    const { screenings } = useSelector(state => state.screenings);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getScreenings(film[id])); 
        // eslint-disable-next-line   
    },[]);
    
    return(
        <main>
            <section className="details-film">
                <figure>
                    <h2>{film[id].name}</h2>
                    <img src={film[id].poster} alt={film[id].name}/>
                </figure>
                <div>
                    <span>Género:</span>
                    <p>{film[id].genre}</p>
                    <span>Clasificación:</span>
                    <p>{film[id].rated}</p>
                    <span>Duracion:</span>
                    <p>{film[id].duration}</p>
                    <span>Director:</span>
                    <p>{film[id].director}</p>
                    <span>Intérpretes:</span>
                    <p>{film[id].actors}</p>
                    <p>{film[id].synopsis}</p>
                </div>

            </section>
            <section className='screenings-film'>
            {screenings.map((screening, index) =>{
                return(
                    <div key={`${index}-${screening.date}`} className='info-date'>
                        <h3>{screening.date}</h3>
                        <div className='info-hours'>
                        {screening.hour.map((item, index) => {
                            return(
                                <div key={`${index}-${screening.date}-${item}`} >
                                    <span name={`${screening.date}-${item}`}>{item}</span>
                                </div>
                            );
                        })}
                        </div>
                    </div>
                );
            })}
            </section>
        </main>
    );
}

export default DetailsFilm;