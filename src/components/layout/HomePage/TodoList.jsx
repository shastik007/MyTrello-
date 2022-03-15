import React from 'react'
import { useSelector } from 'react-redux'
import TodoListStyles from '../../styles/HomeStyles/TodoListStyles'
import TodoItem from './TodoItem'

const TodoList = () => {
	const state = useSelector((state) => state.todo)
	console.log(state)
	return (
		<TodoListStyles>
			{state.map((todos) => {
				return <TodoItem />
			})}
		</TodoListStyles>
	)
}

export default TodoList
