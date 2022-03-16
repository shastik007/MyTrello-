import React, { useRef } from 'react'
import LoginFormStyles from '../../styles/loginStyles/LoginFormStyles'
import Input from '../../UI/Input'
import Button from '@mui/material/Button'
import { FcGoogle } from 'react-icons/fc'
import { FaMicrosoft } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'
import { BsSlack } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

const LoginForm = () => {
	const email = useRef('')
	const password = useRef('')
	const loginSubmitHandler = (e) => {
		e.preventDefault()
		console.log(email.current.value)
	}
	return (
		<LoginFormStyles>
			<h5>Log in to Trello</h5>
			<Input ref={email} name='email' type='email' />
			<Input ref={password} name='password' type='password' />
			<Button
				onClick={loginSubmitHandler}
				className='button_'
				variant='contained'
				color='success'
			>
				Log In
			</Button>
			<h6>OR</h6>
			<Button
				className='button_'
				variant='contained'
				color='secondary'
				startIcon={<FcGoogle />}
			>
				GOOGLE
			</Button>
			<Button
				className='button_'
				variant='contained'
				color='secondary'
				startIcon={<FaMicrosoft />}
			>
				MICROSOFT
			</Button>
			<Button
				className='button_'
				variant='contained'
				color='secondary'
				startIcon={<AiFillApple />}
			>
				APPLE
			</Button>
			<Button
				className='button_'
				variant='contained'
				color='secondary'
				startIcon={<BsSlack />}
			>
				SLACK
			</Button>
			<a href=''>
				<h4>Log in with SSO </h4>
			</a>
			<hr />
			<h5>
				<a href=''>can't login </a> /{' '}
				<a href=''>Sign up for an account</a>
			</h5>
		</LoginFormStyles>
	)
}

export default LoginForm
