// Typescript checks won't be the end of me. Get out ojere.
// @ts-nocheck

import React, { useState } from "react";
import { createContainer } from "unstated-next";

function useTodos(initialstate = [{todo: "Test todo"}]) {
  let [todos, setTodo] = useState(initialstate)
  let [todo, setTodoItem] = useState("")

  const handleInput = e => {
    setTodoItem(e.target.value)
  }

  const addTodo = e => {
    e.preventDefault()
    setTodo([...todos, {todo}])
    setTodoItem("")
  }

  const removeTodo = id => {
    const todoList = todos.filter(todo => todo.todo !== id)
    return setTodo(todoList)
  }
  
  return { todos, todo, addTodo, removeTodo, handleInput }
}

let Todos = createContainer(useTodos)

function Todo({ todo }) {
  let todosContainer = Todos.useContainer()
  return (
    <>     
      <ul className="w3-ul w3-card-4">
        <li key={todo.todo} className="w3-display-container" >
           {todo.todo}
           <span className="w3-button w3-transparent w3-display-right" onClick={() => todosContainer.removeTodo(todo.todo)}>&times;</span>
        </li>
      </ul>
    </>
  )
}

function DisplayTodos() {  
  let todosContainer = Todos.useContainer()
  return (
    <React.Fragment>
      <input type="text" className="w3-input w3-border w3-round" placeholder="Write an article" value={todosContainer.todo} onChange={todosContainer.handleInput} />
      <br />
      <button onClick={todosContainer.addTodo} className="w3-button w3-round w3-black">Add Todo</button>
      <hr />
      {
        todosContainer.todos.map(todo => (
          <Todo todo={todo} />
        ))
      }
    </React.Fragment>
  )
}

export default function TodoList() {
  return (
    <Todos.Provider>
      <DisplayTodos />
    </Todos.Provider>
  )
}

