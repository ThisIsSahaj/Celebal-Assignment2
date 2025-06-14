import React from 'react'

const AddTodoModal = ({closeTodoModal}) => {
  return (
    <div className='todoModal'>
      <h1>Add Todo Modal</h1>
      <button onClick={closeTodoModal}>Close</button>
    </div>
  )
}

export default AddTodoModal
