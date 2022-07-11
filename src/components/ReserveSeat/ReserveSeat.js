import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTemporalTicket } from "../../redux/tickets/tickets.actions";

import ConfirmBuyTickets from "./ConfirmBuyTickets";

import './reserveseats.scss';

const ReserveSeat = () => {

    const dispatch = useDispatch;
    const { ticket, takenSeats } = useSelector(state => state.tickets);
    const [selected, setSelected] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [btnDisabled, setBtnDisabled ] = useState(true);
    const [price, setPrice] = useState(5.50 || 7.50); 

   
    let numRows = ticket.dimensionsHall.rows;
    let numCols = ticket.dimensionsHall.cols;
    const rows = [];
    const cols = [];
    for(let i = 1; i <= numCols; i++){
        cols.push(i);
    }
    for(let i = 0; i< numRows; i++){
        if(i === 0){
            rows.push(0);
        }else{
            rows.push(numCols * i);
        }
    }
    
        
    useEffect(() => {
        const today = new Date().getDay();
        //Miercoles entrada del dia del espectador
        if(today === 3){
            setPrice(5.50);
        }else{
            setPrice(7.50);
        }
    },[]);
    
    
    const handleChecked = (event) => {
        if(event.target.checked){ 
            setSelected(current => [...current,Number(event.target.id)]);
            setBtnDisabled(false);
         }else{
            const uncheck = selected.filter((seat)=> seat !== Number(event.target.id));
            if(uncheck.length !== 0){
                setSelected(uncheck);
            }else{
                setSelected([]);
                setBtnDisabled(true);
            }
        }
    }

    const handleBtnBuy = (event) => {
        const aux = {...ticket};
        aux.mySeats = selected;
        aux.price = price * selected.length;
        console.log(aux);
        dispatch(editTemporalTicket(aux));
        setShowConfirmation(true);
    }

    return (
        <div>
            <section className="hall-container">
                <h2>Butacas</h2>
                {rows.map((row, i) => {
                    return (
                        <div key={`row${i}`} className='row-container'>
                            {cols.map((col, j) => {
                                return (
                                    <div key={`row${i}-col${j}`}>
                                    {!takenSeats 
                                        ? <input type="checkbox" id={row + col} onClick={handleChecked}/>
                                        : takenSeats.indexOf(row+col) === -1 
                                            ?  <input type="checkbox" id={row + col} onClick={handleChecked}/>
                                            : <input type="checkbox" id={row + col} disabled/>
                                    }
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}


            </section>
            <section className="preticket-container">
                <h2>Ticket</h2>
                <h3>{ticket.name}</h3>
                <p>{ticket.movie}</p>
                <div className="preticket-container-hall-time">
                    <p>{ticket.hall}</p>
                    <span>{`${ticket.date} - ${ticket.hour}`}</span>
                    <span></span>
                </div>
                <div>
                    <span>Butacas:</span>
                    {selected.length && selected.map((seat =>{
                        return(
                            <span className="seat-number">{seat}</span>
                        );
                    }))
                    }
                </div>
                <div>
                    <span>Total:</span>
                    <span>{selected.length * price}</span>
                    <h2>Metodo de pago</h2>
                </div>
                { btnDisabled  
                    ? <button className="buy-ticket" disabled>Comprar entradas</button>
                    : <button className="buy-ticket" onClick={handleBtnBuy}>Comprar entradas</button>
                }
            </section>
            { showConfirmation ? <ConfirmBuyTickets seats={selected}/> : <></>}
        </div>
    );
}

export default ReserveSeat;