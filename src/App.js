import React from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

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
              currentTodo={this.props.currentTodo}
              changeCurrent={this.props.changeCurrent}
            />
            <TodoList todos={this.props.todos} />
          </section>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(App)

//export default App;
