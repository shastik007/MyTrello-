import styled from 'styled-components'

const AddItemStyles = styled.div`
	.button {
		width: 200px;
		height: 50px;
		font-weight: bold;
		background-color: white;
		color: black;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.3s;
	}
	.button:hover{
		background-color: gray;
		color: white;
	}
`

export default AddItemStyles
