import React from 'react';
import logo from './logo.svg';
import './App.css';
import Submit from './components/Submit';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TV Maze
        </p>
        <Submit />
        <Results />

      </header>
    </div>
  );
}

export default App;
