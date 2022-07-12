import { useSelector } from 'react-redux';
import './confirmBuyTickets.scss';

const ConfirmBuyTickets = (props) => {
    const { ticket } = useSelector(state => state.tickets);
    return(
        <div className='confirm-container'>
            <h1>{ticket.movie}</h1>
            <h2>{ticket.hall}</h2>
            <h2>{`Sesión: ${ticket.date} - ${ticket.hour}`}</h2>
        </div>
    );
}

export default ConfirmBuyTickets;