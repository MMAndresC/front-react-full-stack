import { useSelector, useDispatch } from 'react-redux';
import { editScreenings } from '../../redux/screenings/screenings.actions';
import './confirmBuyTickets.scss';

const ConfirmBuyTickets = (props) => {
    const { ticket } = useSelector(state => state.tickets);
    const { screenings } = useSelector(state => state.screenings);
    const dispatch = useDispatch();

    const handleBuyTicket = () => {
        const auxSession = screenings.filter((screening) => ticket.idScreening === screening._id);
        
        auxSession[0].takenSeat = [...auxSession[0].takenSeat, ...ticket.mySeats];
        console.log(auxSession[0]);
        dispatch(editScreenings('hola'));
    }

    return(
        <div className='confirm-container'>
            <h1>{ticket.movie}</h1>
            <h2>{ticket.hall}</h2>
            <h2>{`Sesión: ${ticket.date} - ${ticket.hour}`}</h2>
            <h2>{`Butacas: ${ticket.mySeats}`}</h2>
            <button onClick={handleBuyTicket}>Pagar</button>
        </div>
    );
}

export default ConfirmBuyTickets;