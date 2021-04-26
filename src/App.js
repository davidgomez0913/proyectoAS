import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserComponent from './components/user/index'
import Hooks from './components/user/hooks'

function App() {
  const name ="David Gomez"
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo (y) <br></br>
          {name}
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
      <UserComponent/>
      <Hooks/>
    </div>
  );
}

export default App;
