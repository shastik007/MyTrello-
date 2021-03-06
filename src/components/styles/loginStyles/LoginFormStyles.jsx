import styled from 'styled-components'

const LoginFormStyles = styled.form`
	display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 7px;
	box-shadow: 0 0 2px gray;
	.button_ {
		width: 300px;
		margin: 0 auto;
		margin-bottom: 10px;
	}
	& hr {
		height: 0.4px;
		background-color: gray;
		width: 320px;
	}
`

export default LoginFormStyles
