import React from 'react'


class TodoList extends React.Component {
	render() {
		return (
		  <ul>
			{this.props.items.map(item => (
				<div>
					<input type="checkbox" id={item.id} />
					<label for={item.id} key={item.id}>{item.text}</label>
					<form>
						<button>x</button>
					</form>
					
				</div>
			))}
		  </ul>
		);
	}
}

export default TodoList