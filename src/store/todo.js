import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todo',
	initialState: [],
	reducers: {
		add: (state, actions) => {
			state.push({
				id: Math.random().toString(),
				todoName: actions.payload.value,
				todos: [],
			})
		},
		addTask: (state, actions) => {
			console.log(actions)
			const current = state.find((el) => el.id == actions.payload.id)
			if (current) {
				current.todos.push({
					todos: actions.payload.value,
					id: Math.random().toString(),
				})
			}
		},
	},
})

export const todoActions = todoSlice.actions
