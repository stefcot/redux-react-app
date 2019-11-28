import React, {Component} from 'react'
import Todo from './Todo'
import './TodoList.css'
import {connect} from 'react-redux'
import { fetchTodos, toggleTodo, deleteTodo } from "../reducers/todo";

class TodoList extends Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div className="todo-items">
        <ul className="todo-list">
          {this.props.todos.map((todo) => (
            <Todo
              key={todo.id}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              {...todo} />
          ))}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  todos: state.todo.todos
})

const mapDispatchToProps = { fetchTodos, toggleTodo, deleteTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
