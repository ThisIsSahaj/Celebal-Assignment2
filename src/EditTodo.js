import React, { useState } from 'react'

const EditTodo = ({updateTodo, todo}) => {

  const [value, setValue] = useState(todo.text);

  const handleSubmit = (e) => {
     e.preventDefault();

     value != '' ? updateTodo(value, todo.id) : alert("Todo Cannot be Empty")
     

     setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
      <button>Update Todo</button>
    </form>
  )
}

export default EditTodo
