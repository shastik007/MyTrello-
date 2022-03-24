import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { deleteUser } from 'firebase/auth'
import { AUTH } from '../utils/constats'
import {
	getLocalStorage,
	saveToLocalStorage,
	removeLocalStorage,
} from '../utils/helpers'

export const addUser = createAsyncThunk(
	'authentification/checkIsAuth',
	async (userInfo) => {
		saveToLocalStorage(AUTH, userInfo)
		return userInfo
	},
)

export const getUser = createAsyncThunk(
	'authentification/checkIsAuth',
	async () => {
		return getLocalStorage(AUTH)
	},
)

export const removeUser = createAsyncThunk(
	'authentification/checkIsAuth',
	async () => {
		removeLocalStorage(AUTH)
		deleteUser()
	},
)

export const authSlice = createSlice({
	name: 'authentification',
	initialState: {
		email: null,
		token: null,
		id: null,
	},
	reducers: {
		deleteUser: (state) => {
			state.email = null
			state.token = null
			state.id = null
		},
	},
	extraReducers: {
		[addUser.fulfilled]: (state, actions) => {
			state.email = actions.payload.email
			state.token = actions.payload.token
			state.id = actions.payload.id
		},
		[getUser.fulfilled]: (state, actions) => {
			state.email = actions.payload.email
			state.token = actions.payload.token
			state.id = actions.payload.id
		},
	},
})

export const authActions = authSlice.actions
