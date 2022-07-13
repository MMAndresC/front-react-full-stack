import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editTemporalTicket } from "../../redux/tickets/tickets.actions";
import Swal from "sweetalert2";


import './reserveseats.scss';

const ReserveSeat = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { ticket, takenSeats } = useSelector(state => state.tickets);
    const { user } = useSelector(state => state.auth);
    const [selected, setSelected] = useState([]);
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
        if(user){
            aux.clientName = user.name;
            aux.clientEmail = user.email;
        }
        dispatch(editTemporalTicket(aux));  
        if(user){
            navigate(`/editScreenings/${ticket.idScreening}`);
        }else{
            Swal.fire({
                title: 'Para poder realizar la compra de las entradas tiene que estar logueado:',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText:'Soy cliente, ir a Login',
                confirmButtonColor: '#c00e1d',
                denyButtonText:`Aún no tengo cuenta, ir a Registro`,
                denyButtonColor: '#c00e1d',
                grow: 'row',
                background: '#d3d3d3',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                } else if (result.isDenied) {
                    navigate('/register');
                }
            })
        }
    }

    return (
        <div className="Container">
        <div className="ticket-container">
          <section className="hall-container">
            <h2 className="SectionTitle2">Butacas</h2>
            <div>
        <img className="pantcine" src="https://img.freepik.com/vector-gratis/cine-cine-pantalla-blanco-asiento-rojo_34230-250.jpg?size=626&ext=jpg" alt="cine"/>
    </div>
                {rows.map((row, i) => {
                    return (
                        <div key={`row${i}`} className='row-container' >
                            {cols.map((col, j) => {
                                return (
                                    <div key={`row${i}-col${j}`}>
                                    {!takenSeats 
                                        ? <input type="checkbox" id={row + col} onClick={handleChecked}  
                                            className="seat-1" key={`${i}-${j}seat-1`}
                                            />
                                        : takenSeats.indexOf(row+col) === -1 
                                            ?  <input type="checkbox" id={row + col} onClick={handleChecked}  
                                                className="seat-2" key={`${i}-${j}seat-2`}
                                                />
                                            : <div className="seat-3"></div>
                                
                                    }
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </section>
            <section className="preticket-container">
                <h2 className="SectionTitle2">Ticket</h2>
                <h3>{ticket.name}</h3>
                <p>{ticket.movie}</p>
                <div className="preticket-container-hall-time">
                    <p>{ticket.hall}</p>
                    <span>{`${ticket.date} - ${ticket.hour}`}</span>
                </div>
                <div>
                    <span>Butacas:</span>
                    {selected.length && selected.map((seat, index) =>{
                        return(
                            <span className="seat-number" key={`${index}-seat-number`}>{seat}</span>
                        );
                    })
                    }
                </div>
                <div>
                    <p>{ `${price} €`}</p>
                    <span>Total:</span>
                    <span>{`  ${selected.length * price} €`}</span>
                </div>
                { btnDisabled  
                    ? <button className="PrimaryBtn" disabled>Comprar entradas</button>
                    : <button className="PrimaryBtn" onClick={handleBtnBuy}>Comprar entradas</button>
                }
            </section>
        </div>
        </div>
    );
}

export default ReserveSeat;