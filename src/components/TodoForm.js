// Gives the JSX support
import React from 'react'
import './TodoForm.css'
import {connect} from 'react-redux'
import {updateCurrent} from '../reducers/todo'

const TodoForm = (props) => {
  console.log('TodoForm::rendering')
  const{currentTodo, updateCurrent} = props
  const handleInputChange = (evt) => {
    const val = evt.target.value
    updateCurrent(val)
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

const mapStateToProps = (state) => ({
  currentTodo: state.currentTodo
})

const mapDispatchToProps = {updateCurrent}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
