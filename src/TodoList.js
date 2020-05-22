import React from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const TodoList = props => {
	const rows = props.items.map((item) => {
		return (
			<Container key={item.id}>
				<Row>
					<Col><input type="checkbox" /></Col>
					<Col>{item.text}</Col>
					<Col>
						<Button variant="primary" onClick={()=> props.removeItem(item.id)}>Remove</Button>
					</Col>
				</Row>
			</Container>
		)
	})

	return (
		<tbody>{rows}</tbody>
	)
}

export default TodoList