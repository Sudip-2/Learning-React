import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

export const TodoItem = ({ todo }) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const { updateTodo, deleteTodo, toggleComplete } = useTodo

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }
    return (
        <>
            <div className='flex justify-between px-5 items-center mb-2'>
                <div className='flex items-center gap-2'>
                    <input type="checkbox"
                        className='cursor-pointer'
                        checked={todo.completed}
                        onChange={toggleCompleted}
                    />
                    <input type="text" className={`text-sm ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
                        value={todoMsg}
                        readOnly={!isTodoEditable}
                    />
                </div>
                <div className='flex gap-2'>
                    <button className='text-white bg-blue-600 p-2 rounded-xl hover:bg-blue-700'
                        onClick={() => {
                            if (todo.completed) return
                            if (isTodoEditable) {
                                editTodo()
                            } else setIsTodoEditable((prev) => !prev)
                        }}
                        disabled={todo.completed}
                    ><FaEdit /></button>
                    <button className='text-white bg-blue-600 p-2  rounded-xl hover:bg-blue-700'
                    onClick={() => deleteTodo(todo.id)}
                    ><MdDelete /></button>
                </div>
            </div>
        </>
    )
}
