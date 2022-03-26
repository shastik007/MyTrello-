import React from 'react'
import { useSelector } from 'react-redux'
import TodoListStyles from '../../styles/HomeStyles/TodoListStyles'
import TodoItem from './TodoItem'
import AddItem from './AddItem'
import { useGetAllTodosQuery } from '../../../store/todosApi'
import { convertFireBaseData } from '../../../utils/helpers'

const TodoList = ({ searchValue }) => {
   	let data = useSelector((state) => state.todo.todoData)
	if (searchValue.length > 0) {
		data = data.filter((el) => {
			return el.todoName.toUpperCase().match(searchValue.toUpperCase())
		})
	}

	console.log(data)

	return (
		<TodoListStyles>
			{data.map((todos) => {
				return <TodoItem key={todos.id} id={todos.id} todos={todos} />
			})}
			<AddItem />
		</TodoListStyles>
	)
}

export default TodoList
