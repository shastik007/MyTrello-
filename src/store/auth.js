import { createSlice } from '@reduxjs/toolkit'

const initIsAuthUser = { isAuthUser: false }

export const authSlice = createSlice({
	name: 'authentification',
	initialState: initIsAuthUser,
	reducers: {
		login: (state) => {
			state.isAuthUser = true
		},
	},
})

export const authActions = authSlice.actions