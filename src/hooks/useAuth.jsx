import { useSelector } from 'react-redux'

export const useAuth = () => {
	const state = useSelector((state) => state)
	console.log(state, 'useAuth')
	return{
	    isAuth:!!email,
	    email,
	    token,
	    id,
	}
}
