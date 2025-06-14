import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'
import EditTodo from './EditTodo';
import TodoFilter from './TodoFilter';
import AddTodoModal from './addTodoModal';

uuidv4();

const TodoWrapper = () => {

    const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [])

    const [filter, setFilter] = useState('')
    const [date, setDate] = useState('')

    const [isOpen, setIsOpen] = useState(false)

    const openTodoModal = () => setIsOpen(true);
    const closeTodoModal = () => setIsOpen(false);


    // useEffect(() => {
    //     const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    //     setTodos(storedTodos);
    // }, [])


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]) // update local storage everytime todos list is updated

    const addTodo = (newTodo) => {
        setTodos(
            [...todos,
            {
                id: uuidv4(),
                text: newTodo,
                isCompleted: false,
                isEditing: false,
                todoDate: date,
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

    }

    const updateTodo = (updatedText, todoId) => {

        setTodos(todos.map((todo) => (
            todo.id === todoId ? { ...todo, text: updatedText, isEditing: !todo.isEditing } : todo
        )))

    }



    return (
        <div>
            todo wrapper
            <TodoForm addTodo={addTodo} />

            <TodoFilter setFilter={setFilter} setDate={setDate} />

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
                            <EditTodo updateTodo={updateTodo} todo={todo} />

                        ) : (


                            <Todo todo={todo} key={index}
                                toggleComplete={toggleComplete}
                                deleteTodo={deleteTodo}
                                editTodo={editTodo}
                            />
                        )

                    ))
            }

            <button onClick={openTodoModal}>
                Add Todo
            </button>

            {
                isOpen && <AddTodoModal closeTodoModal={closeTodoModal}/>  
            }
            

        </div>
    )
}

export default TodoWrapper
