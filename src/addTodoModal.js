import { X } from 'lucide-react';
import React, { useState } from 'react'

const AddTodoModal = ({ closeTodoModal, addTodo, date, setDate }) => {

  const [value, setValue] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault(); // to prevent reload on submission

    value != '' ? addTodo(value, time) : alert("Todo Cannot be Empty")

    // clear value in input after adding todo
    setValue('')
    setTime('')
    closeTodoModal()
  }

  return (

    <form onSubmit={handleSubmit} className="todoModal">
      <div className="modalContent">

        <div className='modalHeader'>
          <h2 className="modalTitle">Add New ToDo</h2>
          <button className='modalClose' onClick={closeTodoModal} type="button">
            <X height={22} width={22} />
          </button>
        </div>

        <label className="label">Title</label>
        <input
          type="text"
          placeholder="Write a Todo..."
          className="textInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />

        <label className="label">Date & Time</label>
        <div className="datetimeRow">
          <input
            type="date"
            className="dateInput"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            className="timeInput"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="buttonsDiv">
          <button type="submit" className="btn createBtn">
            Create
          </button>
        </div>
      </div>
    </form>
  );
};


export default AddTodoModal
