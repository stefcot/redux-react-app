/**
 * Gets all todos at app start
 *
 * @return {Promise<any>}
 */
export const getTodos = () => {
  return fetch('http://localhost:8080/todos')
    .then((res) => {
      return res.json()
    })
}

/**
 * Posts a todo item
 *
 * @return {Promise<any>}
 */
export const createTodo = (name) => {
  return fetch('http://localhost:8080/todos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      isComplete: false
    })
  }).then((res) => res.json())
}

/**
 * Posts a todo item
 *
 * @return {Promise<any>}
 */
export const updateTodo = (todo) => {
  return fetch( `http://localhost:8080/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then((res) => res.json())
}


/**
 * Posts a todo item
 *
 * @return {Promise<any>}
 */
export const destroyTodo = (id) => {
  return fetch( `http://localhost:8080/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => res.json())
}
