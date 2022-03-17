import styled from 'styled-components'

const TodoItemStyles = styled.div`
	width: 280px;
	overflow: auto;
	max-height: 500px;
	::-webkit-scrollbar {
		background-color: transparent;
		width: 0.5rem;
	}
	background-color: darkgray;
	margin-right: 20px;
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
	& h3 {
		letter-spacing: 1px;
	}
`

export default TodoItemStyles
