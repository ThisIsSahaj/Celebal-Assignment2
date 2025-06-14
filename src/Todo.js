import React from 'react'
import { Circle, CircleCheckBig } from 'lucide-react';

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      
      <div onClick={() => toggleComplete(todo.id)} style={{cursor:"pointer"}}>
        {todo.isCompleted ? <CircleCheckBig style={{color:"#12c081"}} fill='#e5fef4'/> : <Circle style={{color:"#e75a75"}}/>}
      
      </div>
      
      <div onClick={()=> editTodo(todo.id)}  className={`${todo.isCompleted ? 'completed' : ''} todoCard`}>



        <div className='todoContent'>
          <p className='todoTitle'>{todo.text}</p>
          <p className='todoTime'>{todo.time}</p>
        </div>
        {/* <button onClick={()=> editTodo(todo.id)}>Edit</button> */}
        {/* <button onClick={()=> deleteTodo(todo.id)}>Delete</button> */}
      </div>
    </div>
  )
}

export default Todo
