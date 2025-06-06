import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaSave } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";

function App() {
  const [currTodo, setCurrTodo] = useState("")
  const [todos, setTodos] = useState([])

  const saveToLS = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString)
      setTodos(todos)
    }
  }, [])
  

  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), text: currTodo, isDone: false}])
    setCurrTodo("")
    saveToLS(todos)
  }

  const handleChange = (e) => {
    setCurrTodo(e.target.value)
  }

  const handleEdit = (id) => {
    let index = todos.findIndex(todo => {
      return todo.id === id
    })
    setCurrTodo(todos[index].text)
    let newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const handleDelete = (id) => {
    let newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  const handleCheckbox = (id) => {
    let index = todos.findIndex(todo => {
      return todo.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].isDone = !newTodos[index].isDone
    setTodos(newTodos)
    saveToLS(newTodos)
  }

  return (
    <>
      <Navbar/>
      <div className="content bg-blue-100 p-10 min-h-screen">
        <div className="main-todo-app w-full sm:w-[60vw] lg:w-[25vw] mx-auto bg-blue-300 p-5 rounded-lg flex flex-col gap-4 h-[60vh] border border-1.5">
          <div className="heading text-2xl">🎯️ To-Do List</div>
          <div className="todo-input-div flex gap-2 items-center">
            <input onChange={handleChange} value={currTodo} className='todo-input bg-blue-100 w-full px-3.5 py-2.5 outline-none rounded-full' placeholder='Add your task' type='text'/>
            <button onClick={handleAdd} disabled={currTodo.length === 0} className='add-btn bg-blue-500 rounded-full text-white px-4 py-2 hover:cursor-pointer hover:bg-blue-800 disabled:bg-gray-500 disabled:cursor-not-allowed'><FaSave/></button>
          </div>
          <div className={"todo-items flex flex-col gap-2 overflow-y-scroll " + (todos.length === 0 && "items-center my-auto")}>
            {todos.length === 0 && <div className='no-todos'>Nothing to show. Add a new to-do.</div>}
            {todos.map(todo => {
              return (
                <div key={todo.id} className="todo-item flex justify-between items-center bg-blue-200 px-3 py-1 rounded-lg gap-3">
                  <div className="todo-content flex gap-3.5 items-center">
                    <input onChange={() => {handleCheckbox(todo.id)}} type="checkbox" name={todo.id} checked={todo.isDone }/>
                    <div className={todo.isDone ? "line-through text-gray-600" : ""}>{todo.text}</div>
                  </div>
                  <div className="btns flex gap-2 items-center">
                    <button onClick={() => handleEdit(todo.id)} className="action-btn p-2 rounded-full hover:cursor-pointer hover:bg-[#79797933] edit"><MdEdit/></button>
                    <button onClick={() => handleDelete(todo.id)} className="action-btn p-2 rounded-full hover:cursor-pointer hover:bg-[#79797933] delete"><MdDelete/></button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
