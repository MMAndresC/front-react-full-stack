import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getScreenings } from '../../redux/screenings/screenings.actions';
import './detailsFilm.scss';
import { temporalTicket } from '../../redux/tickets/tickets.actions';

const DetailsFilm = () => {

    const { id } = useParams();
    const { film } = useSelector(state => state.film);
    const  { user } = useSelector(state => state.auth);
    const { screenings } = useSelector(state => state.screenings);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('ahora?');
        if(!film){
            navigate('/');
        }
        dispatch(getScreenings(film[id])); 
        
       
        // eslint-disable-next-line   
    },[]);


    const handleDataPreTicket = (event) => {
        const dateHour = event.target.id.split('-');
        let tempTicket = {
            movie: film[id].name,
            hall: screenings[0].idHall.name,
            date: dateHour[0],
            hour: dateHour[1],
        }
        
        tempTicket = {...tempTicket, 
            dimensionsHall: {rows: screenings[dateHour[2]].idHall.rows, 
                cols: screenings[dateHour[2]].idHall.cols
            }
        }

        if(user){
           tempTicket = {...tempTicket, clientEmail: user.email, clientName: user.name};
        }
        
        const occupiedSeats = screenings[dateHour[2]].takenSeats;
        dispatch(temporalTicket(tempTicket, occupiedSeats));
    }
    
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
            {screenings.map((screening, indexDate) =>{
                return(
                    <div key={`${indexDate}-${screening.date}`} className='info-date'>
                        <h3>{screening.date}</h3>
                        <div className='info-hours'>
                        {screening.hour.map((item, indexHour) => {
                            return(
                                <div key={`${indexHour}-${screening.date}-${item}`} >
                                    <Link to='/preticket' >
                                        <span id={`${screening.date}-${item}-${indexDate}-${indexHour}`} 
                                            onClick={handleDataPreTicket}>{item}
                                        </span>
                                    </Link>
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