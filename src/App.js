import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { TodoList } from './components/todoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nameA: 'beck.lee',
      nameB: ''
    };
    this.onInput = this.onInput.bind(this);
  }

  onInput(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <TodoList />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
