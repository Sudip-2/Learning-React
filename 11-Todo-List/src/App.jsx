import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import { TodoForm, TodoItem } from './components/index.js'

function App() {
  const [todos,setTodo] = useState([])
  const addTodo = (todo) => {
    setTodo((prev) => [{id:Date.now(),...todo},...prev])
  }

  const updateTodo = (id,todo) => {
    setTodo((prev) => prev.map((prevTodo) => id == prevTodo.id ? todo:prevTodo))
  }

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevTodo) => id!=prevTodo.id))
  } 

  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((prevTodo) => id == prevTodo.id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length > 0){
      setTodo(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <TodoForm/>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo = {todo}/>
          </div>
        ))
      }
    </TodoProvider>
  )
}

export default App