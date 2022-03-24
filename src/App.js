import './App.css'
import Introduction from './components/layout/Introduction/Introduction'
import Login from './components/layout/Login/Login'
import HomePage from './components/layout/HomePage/HomePage'
import SignUp from './components/layout/SignUp/SingUp'
import { Route, useNavigate, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { getUser } from './store/auth'
import { useDispatch } from 'react-redux'
import { useAuth } from './hooks/useAuth'

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
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<Introduction />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/home' element={<HomePage />} />
				<Route exact path='/signup' element={<SignUp />} />
			</Routes>
		</div>
	)
}

export default App
