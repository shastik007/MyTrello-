import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItemStyles from '../../styles/HomeStyles/TodoItemStyles'
import { todoActions } from '../../../store/todo'
import TodoItemList from './TodoItemList'

const TodoItem = (props) => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()
	const state = useSelector((state) => state)
	console.log(state)
	const changeHandler = (e) => setValue(e.target.value)
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(todoActions.addTask({ value, id: e.target.id }))
	}
	return (
		<TodoItemStyles>
			<h2>{props.todos.todoName}</h2>
			<input value={value} onChange={changeHandler} type='text' />
			<button onClick={submitHandler} id={props.todos.id}>
				add task
			</button>
			<TodoItemList todos={props.todos.todos}/>
		</TodoItemStyles>
	)
}

export default TodoItem
