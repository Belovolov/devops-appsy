import React from "react";
import './Todo.css'

const Todo = ({ task, removeTodo }) => (
  <li className="todo-item">
    {task}
    <button onClick={removeTodo}>X</button>
  </li>
);

export default Todo;
