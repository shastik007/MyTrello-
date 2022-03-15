import React from 'react'
import { useSelector } from 'react-redux'
import TodoListStyles from '../../styles/HomeStyles/TodoListStyles'
import TodoItem from './TodoItem'

const TodoList = () => {
	const state = useSelector((state) => state.todo)
	console.log(state);
	return <TodoListStyles></TodoListStyles>
}

export default TodoList
