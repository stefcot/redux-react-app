import React from 'react'
import Todo from './Todo'
import './TodoList.css'
import {connect} from 'react-redux'

const TodoList =  ({ todos }) => (
  <div className="todo-items">
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
)

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoList)
