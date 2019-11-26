// Gives the JSX support
import React from 'react'
import './TodoForm.css'

export default (props) => (
  <form className="todo-form">
    <input className="todo-input-add" type={'text'}/>
  </form>
)
