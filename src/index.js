import React from "react";
import { render } from "react-dom";
import TodoList from "./Components/Todos";

function App() {
  return (
    <TodoList />
  )
}

render(<App />, document.getElementById("root"))
