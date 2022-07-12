import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getScreenings } from '../../redux/screenings/screenings.actions';
import './detailsFilm.scss';
import { resetTempTicket, temporalTicket } from '../../redux/tickets/tickets.actions';

const DetailsFilm = () => {

    const { id } = useParams();
    const { film } = useSelector(state => state.film);
    const  { user } = useSelector(state => state.auth);
    const { screenings } = useSelector(state => state.screenings);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!film){
            navigate('/');
        }
        dispatch(resetTempTicket());
        dispatch(getScreenings(film[id])); 
       
        // eslint-disable-next-line   
    },[]);

    
    const dates = screenings.map(screening => {
        return screening.date;
    })
    const datesArray = dates.filter((item,index) => {
        return dates.indexOf(item) === index;
    });
    



    const handleDataPreTicket = (event) => {

        const filteredScreening = screenings.filter(screening => screening._id === event.target.id);
        let tempTicket = {
            idScreening: filteredScreening[0]['_id'],
            movie: film[id].name,
            hall: screenings[0].idHall.name,
            date: filteredScreening[0].date,
            hour: filteredScreening[0].hour,
            dimensionsHall: {
                rows: screenings[0].idHall.rows, 
                cols: screenings[0].idHall.cols
            },
        }
        
        if(user){
           tempTicket = {...tempTicket, clientEmail: user.email, clientName: user.name};
        }
        dispatch(temporalTicket(tempTicket, filteredScreening[0].takenSeat));
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
            {datesArray.map((date, indexDate) =>{
                return(
                    <div key={`${indexDate}-${date}`} className='info-date'>
                        <h3>{date}</h3>
                        <div className='info-hours'>
                        {screenings.map((item, indexHour) => {
                            return item.date === date  
                            ? <div>
                                <Link to='/preticket' >
                                    <span id={item._id} onClick={handleDataPreTicket}>{item.hour}</span>
                                </Link>
                            </div>
                            : <></>
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