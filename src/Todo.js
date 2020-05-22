import React, { Component } from 'react'
import logo from './logo.svg';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

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
			<Form onSubmit={this.handleSubmit}>
				<p>
				Create a task
				</p>
				<Form.Row>
					<Col>
						<Form.Control
						id="new-todo"
						placeholder="What needs to be done?"
						onChange={this.handleChange}
						value={this.state.text}
						/>
					</Col>
					<Col>
						<Button type="submit" >
							Add #{this.state.items.length + 1}
						</Button>
					</Col>
				</Form.Row>
				
				<TodoList items={this.state.items} removeItem={this.handleRemove} />
		  	</Form>
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
