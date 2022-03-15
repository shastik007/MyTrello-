import React, { useState } from 'react'
import AddItemStyles from '../../styles/HomeStyles/AddItemStyles'
import Button from '@mui/material/Button'
import { MdExposurePlus1 } from 'react-icons/md'
import AddTodoForm from './AddTodoForm'
const AddItem = () => {
	const [show, setShow] = useState(false)
	const toggleHandler = () => setShow((prev) => !prev)

	return (
		<AddItemStyles>
			{show && <AddTodoForm onClick={toggleHandler} />}
			{!show && <div className='button' onClick={toggleHandler}><strong>+</strong> Add new List</div>}
		</AddItemStyles>
	)
}

export default AddItem
