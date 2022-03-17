import './App.css'
import Introduction from './components/layout/Introduction/Introduction'
import Login from './components/layout/Login/Login'
import HomePage from './components/layout/HomePage/HomePage'
import SignUp from './components/layout/SignUp/SingUp'
import { Switch, Route } from 'react-router-dom'

function App() {
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
