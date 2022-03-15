import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../../../store/todo'

const AddTodoForm = (props) => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(todoActions.add({ value }))
	}

	return (
		<div>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type='text'
			/>
			<button onClick={submitHandler}>add list</button>
			<div onClick={props.onClick}>x</div>
		</div>
	)
}

export default AddTodoForm
