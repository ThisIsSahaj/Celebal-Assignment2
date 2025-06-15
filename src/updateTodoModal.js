import { X } from 'lucide-react';
import React, { useState } from 'react'

const UpdateTodoModal = ({ updateTodo, todo, deleteTodo, closeUpdateModal }) => {

    const [value, setValue] = useState(todo.text);
    const [time, setTime] = useState(todo.time);
    const [date, setDate] = useState(todo.todoDate);

    const handleSubmit = (e) => {

        e.preventDefault(); // to prevent reload on submission

        value != '' ? updateTodo(value, todo.id, time, date) : alert("Todo Cannot be Empty")

        // clear value in input after adding todo
        setValue('')
        setTime('')
    }


    return (
            <form onSubmit={handleSubmit} className="todoModal">

                <div className='modalContent'>

                    <div className='modalHeader'>
                    <h2 className="modalTitle">Update ToDo</h2>
                    <button className='modalClose' onClick={() => closeUpdateModal}>
                    <X  height={22} width={22} />
                    </button>
                    </div>

                    <label className="label">Title</label>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className='textInput'
                        required
                    />

                    <label className="label">Date & Time</label>



                    <div className='datetimeRow'>
                        <input type="date" className='dateInput' value={date} onChange={(e) => setDate(e.target.value)} />
                        <input type="time" className='timeInput' value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>

                    <div className="buttonsDiv">
                        <button className='btn cancelBtn' style={{backgroundColor: "#e75a75", color:"white"}} onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button type='submit' className='btn createBtn'>Update</button>
                    </div>

                </div>
            </form>
    );
};

export default UpdateTodoModal
