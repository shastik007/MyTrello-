import './App.css'
import React, { Suspense, useEffect } from 'react'
import { Route, useNavigate, Routes } from 'react-router-dom'
import { getUser } from './store/auth'
import { useDispatch } from 'react-redux'
import { useAuth } from './hooks/useAuth'
import Loading from './components/UI/Loading'
import LoadingBox from './components/UI/LodingBox'
const Introduction = React.lazy(() =>
	import('./components/layout/Introduction/Introduction'),
)
const Login = React.lazy(() => import('./components/layout/Login/Login'))
const HomePage = React.lazy(() =>
	import('./components/layout/HomePage/HomePage'),
)
const SignUp = React.lazy(() => import('./components/layout/SignUp/SingUp'))

function App() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const auth = useAuth()
	useEffect(async () => {
		const response = await dispatch(getUser())
		if (response.payload) {
			navigate('/home')
		}
		return response
	}, [])

	return (
		<Suspense
			fallback={
				<LoadingBox>
					<Loading />
				</LoadingBox>
			}
		>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Introduction />} />
					<Route path='/login' element={<Login />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/signup' element={<SignUp />} />
				</Routes>
			</div>
		</Suspense>
	)
}

export default App
