/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'
import Api from './components/Api'
import Inicilizar from './components/Inicializar'
import TodoList from './components/TodoList';
const lista=[
  {
    id:1, 
  tittle:"lavar ropa", 
  state:false
},

  {id:2, 
    tittle:"Hacer comida",
  state:false}
];

function App() {
  
  const [value, setValue]=useState("")
  const [listTask, setlistTask]=useState(lista)

  function handleAddTask()
  {
const tarea={
  id:crypto.randomUUID(), 
  tittle:{value}, 
  state:false

}
setlistTask([...listTask,tarea]);

  }

  return(

    <div>
  <h1>Lista de tareas</h1>
  <input placeholder='Agrega tu tarea' onChange={(event)=>{setValue(event.target.value)}}></input>
  <button onClick={handleAddTask}>Add</button>
<p>{value}</p>
  {listTask.map((elemento,index)=>{
return<p key={elemento.id}>{index} {elemento.tittle} {elemento.id} </p>

  })}
  
{/* <button onClick={<TodoList todos={TASK}/>}>Agregar Tarea</button> */}
 
    </div>
  )
 
}

export default App
