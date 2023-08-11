/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {useState, useEffect} from "react";

export default function Api(){
   
    const [data, setData]=useState(null);
    //Use effect
    useEffect(()=>{
        fetch("https://api.example.com/data")
        .then((respuesta)=>respuesta.json)
        .then((data)=>setData(data));
    })
    
    return(
        <div>
            {dataJson.map((item,index)=>(<div key={index}>{item.name}</div>))}
    
        </div>
    )
    }