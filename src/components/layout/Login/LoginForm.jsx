import React, { useRef } from 'react'
import LoginFormStyles from '../../styles/loginStyles/LoginFormStyles'
import { useHistory, Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { authActions } from '../../../store/auth'
import Input from '../../UI/Input'
import Button from '@mui/material/Button'
import { FcGoogle } from 'react-icons/fc'
import { FaMicrosoft } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'
import { BsSlack } from 'react-icons/bs'
import { useDispatch} from 'react-redux'

const LoginForm = () => {
	const email = useRef('')
	const password = useRef('')
	const dispatch = useDispatch()
	const { push } = useHistory()
	const loginSubmitHandler = (e) => {
		e.preventDefault()
		const auth = getAuth()
		const emailValue = email.current.value
		const passwordValue = password.current.value
		signInWithEmailAndPassword(auth, emailValue, passwordValue)
			.then(({ user }) => {
				console.log(user)
				dispatch(
					authActions.setUser({
						token: user.accessToken,
						email: user.email,
						id: user.uid,
					}),
				)
				push('/home')
			})
			.catch((error) => console.log(error.message))
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
			<Link href='/login'>
				<h4>Log in with SSO </h4>
			</Link>
			<hr />
			<h5>
				<Link href=''>can't login </Link> /{' '}
				<Link to="/signup">Sign up for an account</Link>
			</h5>
		</LoginFormStyles>
	)
}

export default LoginForm
