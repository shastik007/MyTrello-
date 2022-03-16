import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoItemStyles from '../../styles/HomeStyles/TodoItemStyles'
import { todoActions } from '../../../store/todo'
import TodoItemList from './TodoItemList'
import AddCardForm from './AddCardForm'

const TodoItem = (props) => {
	const [value, setValue] = useState('')
	const [show, setShow] = useState(false)
	const dispatch = useDispatch()
	const changeHandler = (e) => setValue(e.target.value)
	const toggleHandler = () => setShow(prev => !prev)
	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(todoActions.addTask({ value, id: e.target.id }))
	}
	return (
		<TodoItemStyles>
			<p>{props.todos.todoName}</p>
			<span>...</span>
			<TodoItemList todos={props.todos.todos} />
			{!show && (
				<div
					className='new_card'
					onClick={toggleHandler}
				>
					+ add new Card
				</div>
			)}
			{show && <AddCardForm toggle={toggleHandler} />}
		</TodoItemStyles>
	)
}

export default TodoItem
