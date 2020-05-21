import React, { Component } from 'react'
import logo from './logo.svg';

import TodoList from './TodoList'

const app = {
	name: 'Ketchup Time',
	catchPhrase: 'Simple to-do list to get things done!'
};

class TodoApp extends Component {
	state = { items: [], text: '' };
	  
	render() {
	  return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>
				{app.name}
			</h2>
			
			<h3>TODO</h3>
			<form onSubmit={this.handleSubmit}>
			<p>
			  Create a task
			</p>
			<input
			  id="new-todo"
			  placeholder="What needs to be done?"
			  onChange={this.handleChange}
			  value={this.state.text}
			/>
			<button>
			  Add #{this.state.items.length + 1}
			</button>
			<table>
		  	<TodoList items={this.state.items} removeItem={this.handleRemove} />
			</table>
		  </form>
			{app.catchPhrase && <p>{app.catchPhrase}</p>}
			<a
			className="App-link"
			href="https://www.alecgillis.me"
			target="_blank"
			rel="noopener noreferrer"
			>
			www.alecgillis.me
			</a>
		</header>
	  );
	}
  
	handleChange = (e) => {
	  this.setState({ text: e.target.value });
	}
  
	handleSubmit = (e) => {
	  e.preventDefault();
	  if (this.state.text.length === 0) {
		return;
	  }
	  const newItem = {
		text: this.state.text,
		id: Date.now()
	  };
	  this.setState(state => ({
		items: state.items.concat(newItem),
		text: ''
	  }));
	}

	handleRemove = (id) => {
		const { items } = this.state

		this.setState({
			items: items.filter((item) => {
				return item.id !== id
				;
			})
		})
	}
}

export default TodoApp
