import React from 'react';
import Todo from './Todo'
import logo from './logo.svg';
import './App.css';

const app = {
  name: 'Ketchup Time',
  catchPhrase: 'Simple to-do list to get things done!'
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          {app.name}
        </h2>
        {app.catchPhrase && <p>{app.catchPhrase}</p>}
        <Todo></Todo>
        <a
          className="App-link"
          href="https://www.alecgillis.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.alecgillis.me
        </a>
      </header>
    </div>
  );
}

export default App;
