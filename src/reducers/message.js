import {TODO_ADD, TODOS_INIT} from "./todo"; // reducers can commonly treat actions

const MESSAGE_SHOW = 'MESSAGE_SHOW'

export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg})

export default function(state='', action) {
  switch(action.type) {
    case MESSAGE_SHOW:
      return action.payload
    case TODO_ADD:
    case TODOS_INIT:
      return '' // or undefined, null
    default:
      return state
  }
}
