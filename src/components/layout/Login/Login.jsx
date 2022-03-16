import React from 'react'
import LoginContainerStyles from '../../styles/loginStyles/LoginContainer'
import LoginForm from './LoginForm'
import LoginHeader from './LoginHeader'

const Login = () => {
	process.env.hi = 'fuch'
	console.log(process.env);

	return (
		<LoginContainerStyles>
			<LoginHeader />
			<LoginForm />
		</LoginContainerStyles>
	)
}

export default Login
