import React from 'react';
// import {connect} from 'react-redux';
import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';
// import {bindActionCreators} from "redux"
// Action creator to be bound with bindActionCreators and added to store.dispatch global 'config'
// import {updateCurrent} from './reducers/todo' // brought to Todoform child
// dont need the sotr anymore cause we spread mapped actions creators into mapDispatchToProps returned object
// import store from "./store";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to the app
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main className="todo-page">
          <section className="todo-app">
            <TodoForm
              //currentTodo={this.props.currentTodo}
              //changeCurrent={this.props.updateCurrent}
            />
            <TodoList
              //todos={this.props.todos}
            />
          </section>
        </main>
      </div>
    )
  }
}

// can be written this way because function that dispatch
// the action can have the same name as the action creator
// It is useful when a remap of action is needed like below
//
// const actions = bindActionCreators({updateCurrent}, store.dispatch) // then spread actions object or reassign to a new prop

//const mapStateToProps = (state) => state
//const mapDispatchToProps = {updateCurrent} // Object content will be bound by 'react-redux'
//export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App
