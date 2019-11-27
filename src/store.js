import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk' // for asynchronous action
import reducer from './reducers/todo'

const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

export default createStore(reducer, /* preloadedState, */ enhancer)
