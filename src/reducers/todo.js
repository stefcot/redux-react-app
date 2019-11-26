// Some initial global state
const initialState = {
  todos: [] // empty todo list
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {...state, todos: [...state.todos, ...[action.payload]]}
      // or return {...state, todos: state.todos.concat(action.payload)
    default:
      return state

  }
}
