import { getTodos } from "../lib/todoServices";



const initialState = {
  todos: [],
  currentTodo: ''
}

// Store actions types into contant to get an build error if there's some mistype
const TODO_ADD = 'TODO_ADD'
const TODOS_INIT = 'TODOS_INIT'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

// Action creator function
export const updateCurrent = (val) => ({ type: CURRENT_UPDATE, payload: val })
export const initTodos = (todos) => ({ type: TODOS_INIT, payload: todos })
// Redux thunk allows dispatch to be passed to the returned function
export const fetchTodos = () => {
  return (dispatch) => {
    getTodos()
      .then((todos) => {
        dispatch(initTodos(todos))
      })
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TODOS_INIT:
      return {...state, todos: action.payload}
    case TODO_ADD:
      return {...state, todos: [...state.todos, ...[action.payload]]}
      // or return {...state, todos: state.todos.concat(action.payload)
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state
  }
}
