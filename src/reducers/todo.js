import { getTodos, createTodo } from "../lib/todoServices";
import {showMessage} from './message' // import showMessage action creator

const initialState = {
  todos: [],
  currentTodo: ''
}

// Store actions types into contant to get an build error if there's some mistype
const TODO_ADD = 'TODO_ADD'
const TODOS_INIT = 'TODOS_INIT'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

///////////////////////////////// SYNC ACTION CREATOR FUNCTIONS
export const updateCurrent = (val) => ({ type: CURRENT_UPDATE, payload: val })
export const initTodos = (todos) => ({ type: TODOS_INIT, payload: todos })
export const addTodo = (todo) => ({ type: TODO_ADD, payload: todo })

///////////////////////////////// ASYNC ACTION CREATOR FUNCTIONS
// POST: Redux thunk allows dispatch to be passed to the returned function
// here the response can be handled directly,
// because being the result it's a todo object
export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(showMessage('Saving new todo...'))
    createTodo(name)
      .then((res) => {
        console.log(res)
        dispatch(addTodo(res))
      })
  }
}
// GET: Redux thunk allows dispatch to be passed to the returned function
export const fetchTodos = () => {
  return (dispatch) => {
    getTodos()
      .then((todos) => {
        dispatch(initTodos(todos))
      })
  }
}

////////////////////////////////////// REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case TODOS_INIT:
      return {...state, todos: action.payload}
    case TODO_ADD:
      return {...state, currentTodo: '', todos: [...state.todos, ...[action.payload]]}
      // or return {...state, todos: state.todos.concat(action.payload)
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}
