// Some initial global state
const initialState = {
  todos: [
      {id: 1, name:'Create Static UI', isComplete: true},
      {id: 2, name:'Create Initial State', isComplete: false},
      {id: 3, name:'Use state to render UI', isComplete: false}
    ]
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
