import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {

       e.preventDefault(); // to prevent reload on submission

       value != '' ? addTodo(value) : alert("Todo Cannot be Empty")

       // clear value in input after adding todo
       setValue('')
    }


  return (
    <form onSubmit={handleSubmit}> 
      <input 
      type="text" 
      placeholder='Add a task' 
      value={value}
      onChange={(e)=> setValue(e.target.value)} />
      
      <button>Add Task</button>
    </form>
  )
}

export default TodoForm
