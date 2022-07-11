//import React, { useState } from 'react'
import "./ReservaButacas.scss";




const ReservaButacas = () => {

let  palomitas = 0;
let sellTicket =[];
const a = [0,10,20,30,40,50,60,70,80,90]; 
const b = [1,2,3,4,5,6,7,8,9,10];
const ocupadas = [5,6,9,12,34,35,46,47];

// const [disabled,setDisabled]=useState(false);

const compare = (a) =>{
    let ocu = true;
    for (const ocupada of ocupadas){
   if (a === ocupada){
    ocu = false;
   }
    }
    return (ocu);
}

const handleChange = (ev) => {
    const  {id,checked} = ev.target
if(checked){
    sellTicket.push(id);
}else {
    sellTicket = sellTicket.filter((fil) => fil !== id);
}

}
const handleChangePalom = (ev) => {
    const{value} = ev.target;
  palomitas = value * 3;
  const tickets = sellTicket.length * 7;
  const total= tickets+palomitas;
  console.log(palomitas,tickets,total);
 
}
// const handleSubmit = (ev) => {
//     const  {name, value} = ev.target
//     ev.preventDefault();
//     const numpalom= ev.palomit:value;
//     const totalCompra = (sellTicket.length* 5,95)+(numpalom*2,95);
//     console.log(totalCompra);
//     window.alert(totalCompra);
//     //console.log();
//     // dispatch(editFilms(form))
//     // navigate('/')
// }

return(
    <form  >
    <div>
        <h1>PELICULA</h1>
    </div>
    <div>
        <h1>SESION</h1>
    </div>
    <div>
        <h4>Precio entrada: 7</h4>
    </div>
    <div>
        <img className="pantcine" src="https://img.freepik.com/vector-gratis/cine-cine-pantalla-blanco-asiento-rojo_34230-250.jpg?size=626&ext=jpg" alt="cine"/>
    </div>
    <div>
   
        {a.map((aa,i)=>{
            return(
                <div>
                <span>fila:{i+1}..</span>
               
                {b.map((bb,ii) =>{
                  
                    return (
                        <span>
                       
                        {compare(aa +bb)&& <input type="checkbox" id={aa + bb} onClick={handleChange} className='lib'/>}
                        {!compare(aa +bb)&& <input type="checkbox" id={aa + bb} disabled className='ocup'/>}
                        </span>
                        
                    );
                })}
                </div>
            );
        }) }
    </div>
    <div className="containerpalo">Completa tus entradas con nuestra oferta de palomitas + bebida a 3 euros:<input onChange={handleChangePalom} className="palomitas" type="number" name="palomit"></input> </div>
    <button >Comprar</button>
    </form>
);


}
export default ReservaButacas 








             
