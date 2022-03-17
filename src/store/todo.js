import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todoData:[],
		archive:[],
	},
	reducers: {
		add: (state, actions) => {
			state.todoData.push({
				id: Math.random().toString(),
				todoName: actions.payload.value,
				todos: [],
			})
		},
		addTask: (state, actions) => {
			console.log(actions)
			const current = state.todoData.find((el) => el.id == actions.payload.id)
			if (current) {
				current.todos.push({
					todos: actions.payload.value,
					id: Math.random().toString(),
				})
			}
		},
		deleteTask: (state, actions) => {
			const { taskId, todosId } = actions.payload
			const currentTodos = state.todoData.find((el) => el.id === todosId)
			if (currentTodos) {
				currentTodos.todos.splice(taskId, 1)
			}
		},
		updateTask: (state, actions) => {
			const { taskId, todosId, updatedTask } = actions.payload
			const currentTodos = state.todoData.find((el) => el.id === todosId)
			if(currentTodos){
				const currentIndex = currentTodos.todos.findIndex(el => el.id === taskId)
				currentTodos.todos[currentIndex].todos = updatedTask
			}
		},
		
	},
})

export const todoActions = todoSlice.actions
