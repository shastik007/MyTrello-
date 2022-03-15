import styled from 'styled-components'

const AddTodoFormStyles = styled.div`
	width: 280px;
	height: 90px;
	background-color: white;
	border-radius: 5px;
	input {
		width: 90%;
		height: 30px;
		margin: 5px;
		border: 3px solid #0079bf;
		border-radius: 5px;
		outline: none;
	}
	.wrapper_btn {
		display: flex;
		padding: 0px 10px;
	}
	.wrapper_btn > div {
        margin-left: 30px;
		font-size: 20px;
	}
`

export default AddTodoFormStyles
