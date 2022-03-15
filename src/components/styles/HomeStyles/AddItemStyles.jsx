import styled from 'styled-components'

const AddItemStyles = styled.div`
	.button {
		width: 200px;
		height: 35px;
		background-color: darkgray;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
        transition: 0.5s;
	}
    .button:hover{
        background-color: gray;
    }
`

export default AddItemStyles
