import React from 'react'

const TodoFilter = ({setFilter, date, setDate}) => {
  return (
    <div className='todoFilter'>
      <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} className='dateInput'/>
      
      <select name="filter" id="" onChange={(e)=> setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>

    </div>
  )
}

export default TodoFilter
