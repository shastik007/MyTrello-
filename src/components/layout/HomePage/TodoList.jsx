import React from 'react'
import { useSelector } from 'react-redux'
import TodoListStyles from '../../styles/HomeStyles/TodoListStyles'
import TodoItem from './TodoItem'
import AddItem from './AddItem'

const TodoList = () => {
	const state = useSelector((state) => state.todo.todoData)

	return (
		<TodoListStyles>
			{state.map((todos) => {
				return <TodoItem key={todos.id} id={todos.id} todos={todos} />
			})}
			<AddItem />
		</TodoListStyles>
	)
}

export default TodoList
