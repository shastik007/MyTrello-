import React, { useState } from 'react'
import TodoItemStyles from '../../styles/HomeStyles/TodoItemStyles'
import Button from '@mui/material/Button'
import { GoPlus } from 'react-icons/go'
import TodoItemList from './TodoItemList'

const TodoItem = () => {
	const [showTodos, setShowTodos] = useState(false)

	const onShowTodosHandler = () => setShowTodos((prev) => !prev)

	return (
		<TodoItemStyles>
			{showTodos == true ? (
				<TodoItemList onClick={onShowTodosHandler} />
			) : (
				<Button
					onClick={onShowTodosHandler}
					variant='outlined'
					startIcon={<GoPlus />}
				>
					Add new list
				</Button>
			)}
		</TodoItemStyles>
	)
}

export default TodoItem
