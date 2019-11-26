import React from 'react'
import './Todo.css'

export default ({id, name, isComplete}) => (
  <li className="todo-list-item">
    <input
      id={"cb" + id}
      name={"cb" + id}
      type="checkbox"
      defaultChecked={isComplete}
      className="todo-list-item-cb"/>
    <label htmlFor={"cb" + id}/>
    <span className="todo-list-item-label">{name}</span>
  </li>
)
