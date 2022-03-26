import styled from 'styled-components'

const AddItemStyles = styled.div`
	.button {
		width: 200px;
		height: 50px;
		font-weight: bold;
		background-color: orange;
		color: black;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.3s;
	}
	.button:hover {
		background-color: #1976d2;
		color: white;
	}
`

export default AddItemStyles
