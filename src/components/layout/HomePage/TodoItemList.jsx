import React from 'react'
import TodoItemListStyles from '../../styles/HomeStyles/TodoItemListStyles'

const TodoItemList = (props) => {
  return (
    <TodoItemListStyles>
        <input type="text" />
        <button>add</button>
        <div onClick={props.onClick}>close</div>
    </TodoItemListStyles>
  )
}

export default TodoItemList