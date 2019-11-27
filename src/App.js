import React from 'react';
import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from "./components/Message";
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
            <Message message={'test of message !!!!'}/>
            <TodoForm />
            <TodoList />
          </section>
        </main>
      </div>
    )
  }
}

export default App
