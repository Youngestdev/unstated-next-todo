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
    setTodo(todos.push({todo: todo}))
    setTodoItem("")
  }

  // Erhh... Is this the best thing to do?
  let removeTodo = (todo_id) => setTodo(delete todos[todo_id])
  return { todos, todo, addTodo, removeTodo, handleInput }
}

export let Todos = createContainer(useTodos)

function DisplayTodos() {
  let todos_container = Todos.useContainer()

  return (
    <div>
      <label for="todo">Todo: </label>
      <input type="text" placeholder="Write an article" value={todos_container.todo} onChange={todos_container.handleInput} />
      <button onClick={todos_container.addTodo}>Add Todo</button>
      {        
        todos_container.todos.map(todo => (
          <p key={todo.todo}>{todo.todo}</p>         
        ))
      }
    </div>
  )
}

export default function TodoList() {
  return (
    <Todos.Provider>
      <DisplayTodos />
    </Todos.Provider>
  )
}

