import React from 'react'
import { createGlobalStyle } from 'styled-components'
import LoginContainerStyles from '../../styles/loginStyles/LoginContainer'
import LoginForm from './LoginForm'
import LoginHeader from './LoginHeader'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const LoginGlobalStyle = createGlobalStyle`
body{
	background: var(--background-form);
	background-size:cover;
	animation: IN ease-in 1s;
}

@keyframes IN{
	0%{
       opacity: 0;
	}
	100%{
		opacity: 1;
	}
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
