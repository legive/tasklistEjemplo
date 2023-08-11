/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import TodoItem from './TodoItem'

export default function TodoList({todos}) {
  return (
    <div>
  
    {todos.map(todo=><TodoItem taskName={todo.task}/>)}
    </div>
  )
}


