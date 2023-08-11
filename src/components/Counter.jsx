/* eslint-disable no-unused-vars */
import {useState, useEffect} from "react";

export default function Counter(){
const [valor,setValor]=useState(0);
const [valor2,setValor2]=useState(10);

const handleClick=()=>{
    setValor(valor+1)
}
const handleClickrRestar=()=>{
    setValor(valor-1)
    
}
const handleClickrRestar2=()=>{
    setValor2(valor2-1)
}
const handleClickrInicializar=()=>{
    setValor(0)
    setValor2(0)
}


//Use effect
useEffect(()=>{
    console.log("He sido llamado porque el componente se renderizó")
})
useEffect(()=>{
    console.log("El valor se modifico")
},[valor])

useEffect(()=>{
    console.log("He sido llamado porque el componente ha sido montado (es visible por primera vez)")
}, [])
return(
    <div>
        <h2>{valor}</h2>
        <button onClick={handleClick} >SUMAR</button>
        {/* <button onClick={handleClickrRestar} >RESTAR</button>
        <button onClick={handleClickrInicializar} >Inicializar</button>  */}
        <br></br>
        <h2>{valor2}</h2>
        <button onClick={handleClickrRestar2} >RESTAR</button>
        <p>{valor+valor2}</p>


    </div>
)
}

