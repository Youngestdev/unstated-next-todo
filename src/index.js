import React from "react";
import { render } from "react-dom";
import TodoList from "./Components/Todos";

function App() {
  return (
    <>
    <h3> Unstated Todo App </h3>
    <hr />
      <TodoList />
    </>
  )
}

render(<App />, document.getElementById("root"))
