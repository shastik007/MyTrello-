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
			{!show && (
				<Button
					onClick={toggleHandler}
					variant='outlined'
					startIcon={<MdExposurePlus1 />}
				>
					Delete
				</Button>
			)}
		</AddItemStyles>
	)
}

export default AddItem
