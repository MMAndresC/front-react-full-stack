
import { useSelector } from "react-redux";
import './reserveseats.scss';

const ReserveSeat = () => {
    const { ticket, takenSeats } = useSelector(state => state.tickets);
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
        }
        rows.push(i + numRows);
    }

    const handleChecked = (event) => {
        console.log(event.target.checked);
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
            </section>
        </div>
    );
}

export default ReserveSeat;