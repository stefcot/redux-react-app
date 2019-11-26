// Gives the JSX support
import React from 'react'
import './TodoForm.css'

export default (props) => {
  const{currentTodo, changeCurrent} = props
  const handleInputChange = (evt) => {
    const val = evt.target.value
    changeCurrent(val)
  }

  return (
    <form className="todo-form">
      <input
        className="todo-input-add"
        value={currentTodo}
        onChange={handleInputChange}
        type={'text'}/>
    </form>
  )
}
