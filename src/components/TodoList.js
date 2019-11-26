import React from 'react'
import Todo from './Todo'
import './TodoList.css'

export default ({ todos }) => (
  <div className="todo-items">
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
)
