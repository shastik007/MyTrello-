import React from 'react'
import Button from '@mui/material/Button'
import { GoPlus } from 'react-icons/go'
import TodoItemList from './TodoItemList'

const AddTask = (props) => {
  return (
    <div>
        <Button onClick={() => props.setShowTodos((prev) => !prev)} variant='outlined' startIcon={<GoPlus />}>
				add
			</Button>
			{props.showTodos && <TodoItemList />}
    </div>
  )
}

export default AddTask