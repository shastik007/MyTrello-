import React, { useRef, useState } from 'react'
import LoginFormStyles from '../../styles/loginStyles/LoginFormStyles'
import LoginWarning from './LoginWarning'
import { useNavigate, Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { authActions } from '../../../store/auth'
import Input from '../../UI/Input'
import Button from '@mui/material/Button'
import { FcGoogle } from 'react-icons/fc'
import { FaMicrosoft } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'
import { BsSlack } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../store/auth'
import {
	useGetAllTodosQuery,
	useSetTodoMutation,
} from '../../../store/todosApi'


const LoginForm = () => {
	const [setSomething, { isLoading }] = useSetTodoMutation()

	const [errorMessage, setErrorMessage] = useState(null)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const onChangeEmail = (e) => {
		setEmail(e.target.value)
		setErrorMessage(null)
	}
	const onChangePassword = (e) => {
		setPassword(e.target.value)
		setErrorMessage(null)
	}
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const loginSubmitHandler = (e) => {
		e.preventDefault()
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				return dispatch(
					addUser({
						token: user.accessToken,
						email: user.email,
						id: user.uid,
					}),
				)
			})
			.then(() => {
				navigate('/home')
			})
			.catch((error) => {
				setErrorMessage({
					message: error.message,
				})
			})
	}

	// const loginSubmitHandler = async (e) => {
	// 	e.preventDefault()
	// 	let response = await setSomething({
	// 		email,
	// 		password,
	// 	}).unwrap()
	// 	console.log(response);
	// }

	return (
		<LoginFormStyles>
			{errorMessage && <LoginWarning message={errorMessage} />}
			<h5>Log in to Trello</h5>
			<Input
				value={email}
				onChange={onChangeEmail}
				name='email'
				type='email'
			/>
			<Input
				value={password}
				onChange={onChangePassword}
				name='password'
				type='password'
			/>
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
			<Link to='/login'>
				<h4>Log in with SSO </h4>
			</Link>
			<hr />
			<h5>
				<Link to='/signup'>can't login </Link> /
				<Link to='/signup'>Sign up for an account</Link>
			</h5>
		</LoginFormStyles>
	)
}

export default LoginForm
