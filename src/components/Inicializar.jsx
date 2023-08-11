/* eslint-disable no-unused-vars */
import {useState} from "react";

export default function Inicilizar(){
const [valor,setValor]=useState(0);
return(
    <div>
        <h2>{valor}</h2>
        <button onClick={()=>setValor(0)} >Inicializar</button>
    </div>
)
}