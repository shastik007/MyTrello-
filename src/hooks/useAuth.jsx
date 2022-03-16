import { useSelector } from 'react-redux'

export const useAuth = () => {
	const { email, token, id } = useSelector(state => state.auth)
	console.log(state, 'useAuth')
	return {
		isAuth: !!email,
		email,
		token,
		id,
	}
}
