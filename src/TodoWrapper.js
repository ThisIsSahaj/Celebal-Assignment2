import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'
import EditTodo from './EditTodo';
import TodoFilter from './TodoFilter';
import AddTodoModal from './addTodoModal';
import UpdateTodoModal from './updateTodoModal';

uuidv4();

const TodoWrapper = () => {

    const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])

    const [filter, setFilter] = useState('')
    const [date, setDate] = useState(() => {
        const today = new Date();
        return today.toISOString().split('T')[0]; // default date as current in format 'YYYY-MM-DD'
    });


    const [isOpen, setIsOpen] = useState(false)

    const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false)

    const openTodoModal = () => setIsOpen(true);
    const closeTodoModal = () => setIsOpen(false);

    const openUpdateModal = () => setUpdateModalIsOpen(true);
    const closeUpdateModal = () => setUpdateModalIsOpen(false);




    // useEffect(() => {
    //     const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    //     setTodos(storedTodos);
    // }, [])



    useEffect(() => {

        // to exclude isEditing from saving to local storage
        const todosToStore = todos.map(({ isEditing, ...rest }) => rest);
        localStorage.setItem('todos', JSON.stringify(todosToStore));

    }, [todos]) // update local storage everytime todos list is updated

    const addTodo = (newTodo, todoTime) => {
        setTodos(
            [...todos,
            {
                id: uuidv4(),
                text: newTodo,
                isCompleted: false,
                isEditing: false,
                todoDate: date,
                time: todoTime,
            }
            ]
        )
    }

    const toggleComplete = (todoId) => {

        setTodos(
            todos.map((todo) => (
                todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
            ))
        )
    }

    const deleteTodo = (todoId) => {

        // filter & return only those todos whose id is not equal to the id of the todo to be deleted
        setTodos(todos.filter((todo) => (
            todo.id != todoId
        )))
    }

    const editTodo = (todoId) => {

        setTodos(todos.map((todo) => (
            todo.id === todoId ? { ...todo, isEditing: !todo.isEditing } : todo
        )))

        openUpdateModal();


    }

    const updateTodo = (updatedText, todoId, todoTime, todoDate) => {

        setTodos(todos.map((todo) => (
            todo.id === todoId ? {
                ...todo,
                text: updatedText,
                time: todoTime,
                todoDate: todoDate,
                isEditing: !todo.isEditing
            } : todo
        )))
        closeUpdateModal()

    }



    return (
        <div className='todoWrapper'>

            {/* <TodoForm addTodo={addTodo} /> */}

            <h1>Todo List</h1>

            <TodoFilter setFilter={setFilter} date={date} setDate={setDate} />

            <div style={{ marginTop: "10px", display: "flex", justifyContent: "end" }}>
                <button onClick={openTodoModal} className='addBtn'>
                    + Add Todo
                </button>
            </div>



            <div className='todoList'>

                {
                    todos.filter((todo) => {
                        if (todo.todoDate == date) return todo;
                    })

                        .filter((todo) => {
                            if (filter === "Completed") return todo.isCompleted;
                            if (filter === "Incomplete") return !todo.isCompleted;
                            return true;
                        })
                        .map((todo, index) => (

                            todo.isEditing ? (

                                updateModalIsOpen && <UpdateTodoModal updateTodo={updateTodo} todo={todo} deleteTodo={deleteTodo} closeUpdateModal={closeUpdateModal} />
                                // <EditTodo  updateTodo={updateTodo} todo={todo} />


                            ) : (


                                <Todo todo={todo} key={index}
                                    toggleComplete={toggleComplete}
                                    deleteTodo={deleteTodo}
                                    editTodo={editTodo}
                                />
                            )

                        ))
                }
            </div>



            {
                isOpen && <div className='overlay'></div>
            }
            {updateModalIsOpen && <div className='overlay'></div>
            }
            {
                isOpen &&
                <AddTodoModal
                    closeTodoModal={closeTodoModal}
                    addTodo={addTodo}
                    date={date}
                    setDate={setDate}
                />
            }


        </div>
    )
}

export default TodoWrapper
