import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
              <li className="todo-list-item">
                <input id="cb-1" name="cb-1"  type="checkbox" className="todo-list-item-cb"/>
                <label htmlFor="cb-1"/>
                <span className="todo-list-item-label">Create static UI</span>
              </li>
              <li className="todo-list-item">
                <input id="cb-2" name="cb-2" type="checkbox" className="todo-list-item-cb"/>
                <label htmlFor="cb-2"/>
                <span className="todo-list-item-label">Create initial state</span>
              </li>
              <li className="todo-list-item">
                <input id="cb-3" name="cb-3" type="checkbox" className="todo-list-item-cb"/>
                <label htmlFor="cb-3"/>
                <span className="todo-list-item-label">Update state to render UI</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
