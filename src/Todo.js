import React from 'react'

import TodoList from './TodoList'

class TodoApp extends React.Component {
	state = { items: [], text: '' };
	  
	render() {
	  return (
		<div>
		  <h3>TODO</h3>
		  <form onSubmit={this.handleSubmit}>
			<label htmlFor="new-todo">
			  Create a task
			</label>
			<input
			  id="new-todo"
			  placeholder="What needs to be done?"
			  onChange={this.handleChange}
			  value={this.state.text}
			/>
			<button>
			  Add #{this.state.items.length + 1}
			</button>
		  </form>
		  <TodoList items={this.state.items} />
		</div>
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
}

export default TodoApp
