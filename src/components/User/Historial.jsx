import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QRCode from "react-qr-code";
import { getTicketsByClient } from "../../redux/tickets/tickets.actions";

import './historial.scss';


const Historial = () => {

    const dispatch = useDispatch();
    const { user }  = useSelector(state => state.auth);
    const { ticket } = useSelector(state => state.tickets);
    const [showQr, setShowQr] = useState(false);
    const [valueQr, setValueQr] = useState('');

    useEffect(() => {
        console.log('effect de histoprialx');
        
        dispatch(getTicketsByClient(user.email));
        
        // eslint-disable-next-line
    },[]);

    const handleShowQr = (event) => {
        setShowQr(true);
        setValueQr(event.target.id);
    }

    return(
        <section className="history-data">
            
            <div>
                { ticket.map((item) => {
                    return(
                        <div>
                        <span>{item.movie}</span>
                        <span>{item.hall}</span>
                        <span>{item.date}</span>
                        <span>{item.hour}</span>
                        <span>{item.mySeats}</span>
                        <span className="qr-anchor" id={item._id} onClick={handleShowQr}>QR</span>
                        </div>
                        
                    );
                })
                }
            </div>
            {showQr &&
                <QRCode value={valueQr} size={256}/>
            }
        </section>
    );
}

export default Historial;