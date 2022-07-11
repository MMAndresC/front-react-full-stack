
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSeats } from "../../redux/screenings/screenings.actions";
import { addTicket, editTemporalTicket } from "../../redux/tickets/tickets.actions";


const ConfirmTicket = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const { ticket } = useSelector(state => state.tickets);

    useEffect(() => {
        if(user && !ticket.email){
            dispatch(editTemporalTicket({...ticket, clientName: user.name, clientEmail: user.email }));
        }
        // eslint-disable-next-line
    }, []);

    const handleBuyTicket = () => {
        dispatch(updateSeats(ticket.idScreening, ticket.mySeats));
        const ticketToSaveDb = {
            clientEmail: ticket.clientEmail,
            clientName: ticket.clientName,
            movie: ticket.movie,
            hall: ticket.hall,
            date: ticket.date,
            hour: ticket.hour,
            mySeats: ticket.mySeats,
            price: ticket.price,
            //qr:
        }
        dispatch(addTicket(ticketToSaveDb));
    }

    return(
        <div className='confirm-container'>
            <h1>{ticket.movie}</h1>
            <h2>{ticket.hall}</h2>
            <h2>{`Sesión: ${ticket.date} - ${ticket.hour}`}</h2>
            <h2>{`Butacas: ${ticket.mySeats}`}</h2>
            <h2>{user?.name}</h2>
            <h2>{user.email}</h2>
            <h2>Datos Bancarios</h2>
            <button onClick={handleBuyTicket}>Pagar</button>
        </div>
    );
}

export default ConfirmTicket;