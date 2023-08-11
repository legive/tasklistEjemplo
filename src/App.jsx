/* eslint-disable no-unused-vars */
import { useReducer, useState } from 'react';
import './App.css'
import Api from './components/Api'
import Inicilizar from './components/Inicializar'
import TodoList from './components/TodoList';


function App() {

  function reducir(state, action){
if(action.type=='INCREMENT')
{
  return {...state,
    valor2: state.valor2+1,
    name:"Eldy"
  
  }
}
else if(action.type=='DECREMENT')
{
  return {...state,
    valor2: state.valor2-1,
    name:"Leyla"
  
  }
}
else if(action.type=='RESET')
{
  return {...state,
    valor2: 0,
    name:"Keyla"
  
  }
}

  }
  
  const [cont, setCont]=useState(0)
  const [state, dispach]=useReducer(reducir,{
    
    valor2:123,
    name:"Leyla",
  
  });

  
  return(
<div>
  <h1>USE STATE</h1>
  <p>{cont}</p>
  <button onClick={()=>{setCont(cont+1)}}>USE STATE INCREMENT</button>
  <h1>USE REDUCER</h1>
  
    <p>{state.valor2}</p>
    <p>{state.name}</p>
    <button onClick={()=>dispach({type:'INCREMENT'})}>+Use reducer</button>
    <button onClick={()=>dispach({type:'DECREMENT'})}>-Use reducer</button>
    <button onClick={()=>dispach({type:'RESET'})}>-Use reducer</button>
     </div>
  )
 
}

export default App
