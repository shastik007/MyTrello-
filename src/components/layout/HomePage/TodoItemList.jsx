import React from 'react'

const TodoItemList = (props) => {
	return (
		<div>
			{props.todos.map((el) => {
				return <p>{el.todos}</p>
			})}
		</div>
	)
}

export default TodoItemList
