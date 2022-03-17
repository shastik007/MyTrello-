import React from 'react'
import { useSelector } from 'react-redux'
import TodoListStyles from '../../styles/HomeStyles/TodoListStyles'
import TodoItem from './TodoItem'
import AddItem from './AddItem'

const TodoList = ({searchValue}) => {
	let state = useSelector((state) => state.todo.todoData)
	if(searchValue.length > 0){
		state = state.filter((el) =>{
			return el.todoName.toUpperCase().match(searchValue.toUpperCase())
		})
	}

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
