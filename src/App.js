import React from 'react';
import logo from './logo.svg';
import './App.css';

const app = {
  name: 'Ketchup Time',
  catchPhrase: 'Simple to-do list to get things done!'
};

// Fill this with all activities planned
let toDos = [];

// Defines an activity on a user's todo list
class Activity {
  constructor(name) {
    this.name = name
    this.complete = false
  }
}

const addTodo = () => {
  //const val = document.getElementById("toDoValue").nodeValue
  /*document.getElementById("toDoValue").clear
   toDos.push(new Activity(val))
  alert(val) */
}
/*
<input type="text" placeholder="What do you need todo?" id="toDoInput" value={this.state.inputValue} />
          <button onClick={this.addTodo.bind(this)}>Add</button>*/

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          {app.name}
        </h2>
        {app.catchPhrase && <p>{app.catchPhrase}</p>}
        <div>
          PUT THE CODE ABOVE HERE ONCE IT WORKS
        </div>
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
