/**
 *
 * @return {Promise<any>}
 */
export const getTodos = () => {
  return fetch('http://localhost:8080/todos')
    .then((res) => {
      return res.json()
    })
}
