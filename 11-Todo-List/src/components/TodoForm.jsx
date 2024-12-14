import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

export const TodoForm = () => {
    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()
    const add = () => {
        if (!todo) return
        addTodo(todo)
        setTodo('')
    }
    return (
        <div className='h-svh w-full flex justify-center items-center'>
            <form onSubmit={add} className='h-[600px] min-w-[350px] bg-blue-300 rounded-md lg:h-[550px] lg:w-[450px]'>
                <h1 className='text-center text-3xl font-semibold my-5'>TODO List</h1>
                <h3 className='text-xl font-medium ml-5'>Add a Todo</h3>
                <div className='flex justify-center gap-2 my-2 px-4'>
                    <input
                        type="text"
                        placeholder='Enter Your Task Here'
                        className='px-5 w-full rounded-3xl outline-none'
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button
                        className='text-white bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-700' type='submit'
                    >save</button>
                </div>

                <div className='pl-4'>
                    <input type="checkbox" />
                    <label htmlFor="" className='text-sm ml-1'>Show Finished</label>
                </div>
                <hr className='border-black mx-8 my-3' />
                <h2 className='text-xl font-medium ml-5'>Your Todos</h2>

                {/* Todo written section */}
                <div>

                </div>
            </form>
        </div>
    )
}
