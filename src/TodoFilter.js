import React from 'react'

const TodoFilter = ({setFilter, setDate}) => {
  return (
    <div>
      <select name="" id="" onChange={(e)=> setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>

      <input type="date" onChange={(e)=> setDate(e.target.value)}/>
    </div>
  )
}

export default TodoFilter
