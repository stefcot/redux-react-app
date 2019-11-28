import React from 'react'
import './Todo.css'

export default ({id, name, isComplete, toggleTodo}) => (
  <li className="todo-list-item">
    <input
      id={"cb" + id}
      name={"cb" + id}
      type="checkbox"
      onChange={() => toggleTodo(id)}
      checked={isComplete}
      className="todo-list-item-cb"/>
    <label htmlFor={"cb" + id}/>
    <span className="todo-list-item-label">{name}</span>
  </li>
)
