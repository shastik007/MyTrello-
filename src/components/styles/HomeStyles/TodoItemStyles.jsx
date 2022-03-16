import styled from 'styled-components'

const TodoItemStyles = styled.div`
	width: 280px;
	background-color: darkgray;
	margin-right: 15px;
	border-radius: 5px;

	.new_card {
		width: 100%;
		height: 50px;
		font-size: 15px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.head_todoitem {
		width: 90%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
`

export default TodoItemStyles
