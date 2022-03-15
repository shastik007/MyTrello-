import React from 'react'
import { useSelector } from 'react-redux'
import TodoListStyles from '../../styles/HomeStyles/TodoListStyles'
import TodoItem from './TodoItem'
import AddItem from './AddItem'

const TodoList = () => {
	const state = useSelector((state) => state.todo)

	return (
		<TodoListStyles>
			{state.map((todos) => {
				return <TodoItem key={todos.id} todos={todos} />
			})}
			<AddItem />
		</TodoListStyles>
	)
}

export default TodoList
