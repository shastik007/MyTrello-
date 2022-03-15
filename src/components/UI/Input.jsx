import styled from 'styled-components'

const Input = styled.input`
	width: 300px;
	height: 35px;
	margin: 0 auto;
	margin-bottom: 30px;
	outline: none;
	transition: 0.5ms;
	&:focus {
		border: 2px solid darkblue;
	}
`

export default Input
