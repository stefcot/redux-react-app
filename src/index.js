import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'
import {Provider} from 'react-redux' // use to hydrate app with provider HOC

// const handleInputChange = (evt) => {
//   store.dispatch({
//     type: 'TODO_ADD',
//     payload: {
//       id: Math.round(Math.random()*1000),
//       name: evt.target.value,
//       isComplete: false
//     }
//   })
// }

// PHASE 1
// the methods passed will get the store dispatch
// a generated action imported from the reducer module
// const todoChangeHandler = (val) => {
//   store.dispatch(updateCurrent(val))
// }

// PHASE 2
// const actions = bindActionCreators({
//   todoChangeHandler: updateCurrent // function that dispatch the action return by the action creator
// }, store.dispatch)

// PHASE 3
// can be written this way because function that dispatch
// the action can have the same name as the action creator
// const actions = bindActionCreators({updateCurrent}, store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);

// IMPORT: SIMPLE REDUX IMPLEMENTATION WITHOUT REACT-REDUX
// const renderAtStart = () => {
  // Don't forget to add the store to get last state
  // const state = store.getState()
  // @see: https://github.com/eggheadio-projects/egghead_react_redux_course/tree/master/06_Create-a-Redux-Store
  // because the state, mapped on store should hae a todos prop/entry
  // the state gonna be spread as props

  // NO PROVIDER YET
  // ReactDOM.render(<App
  //   todos={state.todos}
  //   currentTodo={state.currentTodo}
    //changeCurrent={todoChangeHandler}// PHASE 1
    //changeCurrent={actions.todoChangeHandler}// PHASE 2
    //changeCurrent={actions.updateCurrent}// PHASE 3
//   />, document.getElementById('root'));
// }

// render just once with initial sore data
//renderAtStart();

// Changes in the store are subscribed like this,
// it's a good way to monitor and log changes.
// For now, the app gonna render thanks to store subscription
// store.subscribe(renderAtStart);

// For test purposes, programmatically dispatches an 'TODO_ADD' action
// setTimeout(() => {
//   store.dispatch({type: 'TODO_ADD', payload: {id: 456, name:'Task added with a set timout', isComplete: true}})
// }, 3000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
