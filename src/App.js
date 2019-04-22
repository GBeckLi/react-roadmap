import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { MyComponent } from './components/myComponent/myComponent';
import { List } from './components/list/list';

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
          < MyComponent name={this.state.nameA} input={(e) => { this.onInput(e, 'nameA') }} />
          < List />
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
