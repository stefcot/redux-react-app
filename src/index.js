import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

const state = store.getState()

// @see: https://github.com/eggheadio-projects/egghead_react_redux_course/tree/master/06_Create-a-Redux-Store
// because the state, mapped on store should hae a todos prop/entry
// the state gonna be spread as props

// NO PROVIDER YET
ReactDOM.render(<App {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
