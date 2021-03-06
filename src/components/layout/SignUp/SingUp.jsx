import * as React from 'react'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { authActions } from '../../../store/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Alert from '@mui/material/Alert'
import { addUser } from '../../../store/auth'
import { useCallbackPrompt } from '../../../hooks/useCallBackPrompt'
import AlertDialog from '../../UI/AlertDialog'

function Copyright(props) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{'Copyright © '}
			<Link color='inherit' to='https://mui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const theme = createTheme()

export default function SignUp() {
	const [showPormpt, setShowPrompt] = useState(false)
	const [showDialog, confimNavigation, cancelNavigation] =
		useCallbackPrompt(showPormpt)

	const dispatch = useDispatch()
	const [error, setError] = useState(null)
	const navigate = useNavigate()
	const onChange = () => {
		setError(null)
		setShowPrompt(true)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		const auth = getAuth()
		createUserWithEmailAndPassword(
			auth,
			data.get('email'),
			data.get('password'),
		)
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
			.catch((error) => setError({ message: error.message }))
	}

	return (
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				{showDialog && (
					<AlertDialog
						confirm={confimNavigation}
						cancel={cancelNavigation}
					/>
				)}
				{error && <Alert severity='warning'>{error.message}</Alert>}
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign up
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									onChange={onChange}
									autoComplete='given-name'
									name='firstName'
									required
									fullWidth
									id='firstName'
									label='First Name'
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									onChange={onChange}
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='lastName'
									autoComplete='family-name'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									onChange={onChange}
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									onChange={onChange}
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											value='allowExtraEmails'
											color='primary'
										/>
									}
									label='I want to receive inspiration, marketing promotions and updates via email.'
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link to='/login' variant='body2'>
									Already have an account? Log In
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	)
}
