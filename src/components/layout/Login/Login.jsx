import React from 'react'
import { createGlobalStyle } from 'styled-components'
import LoginContainerStyles from '../../styles/loginStyles/LoginContainer'
import LoginForm from './LoginForm'
import LoginHeader from './LoginHeader'
import { useEffect } from 'react'

const LoginGlobalStyle = createGlobalStyle`
body{
	background: var(--background-form);
	background-size:cover;
}
 
`

const Login = () => {
	return (
		<>
			<LoginGlobalStyle />
			<LoginContainerStyles>
				<LoginHeader />
				<LoginForm />
			</LoginContainerStyles>
		</>
	)
}

export default Login
