import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({ todos }) {
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
          <form className="todo-form">
            <input className="todo-input-add" type={'text'}/>
          </form>
          <div className="todo-items">
            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id} className="todo-list-item">
                  <input
                    id={"cb" + todo.id}
                    name={"cb" + todo.id}
                    type="checkbox"
                    defaultChecked={todo.isComplete}
                    className="todo-list-item-cb"/>
                  <label htmlFor={"cb" + todo.id}/>
                  <span className="todo-list-item-label">{todo.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
