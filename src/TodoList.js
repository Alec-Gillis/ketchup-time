import React from 'react'


const TodoList = props => {
	const rows = props.items.map((item) => {
		return (
			<tr key={item.id}>
				<td><input type="checkbox" /></td>
				<td>{item.text}</td>
				<td>
					<button onClick={()=> props.removeItem(item.id)}>Remove</button>
				</td>
			</tr>
		)
	})

	return (
		<tbody>{rows}</tbody>
	)
}

export default TodoList