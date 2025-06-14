import React from 'react'

const Todo = ({todo, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div style={{display:"flex", justifyContent:"center", gap:"10px", marginTop:"10px", cursor:"pointer"}}>
      <p onClick={()=> toggleComplete(todo.id)} className={`${todo.isCompleted ? 'completed' : ''}`}>{todo.text}</p>
      <button onClick={()=> editTodo(todo.id)}>Edit</button>
      <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default Todo
