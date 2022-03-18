import './App.css'
import Introduction from './components/layout/Introduction/Introduction'
import Login from './components/layout/Login/Login'
import HomePage from './components/layout/HomePage/HomePage'
import SignUp from './components/layout/SignUp/SingUp'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { getUser } from './store/auth'
import { useDispatch } from 'react-redux'
import { useAuth } from './hooks/useAuth'

function App() {
	const { push } = useHistory()
	const dispatch = useDispatch()
	const auth = useAuth()
	useEffect(async () => {
		const response = await dispatch(getUser())
		if (response.payload) {
			push('/home')
		}
		return response
	}, [])

	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Introduction} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/home' component={HomePage} />
				<Route exact path='/signup' component={SignUp} />
			</Switch>
		</div>
	)
}

export default App
