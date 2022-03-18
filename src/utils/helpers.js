export const saveToLocalStorage = (key, value) => {
	return localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key) => {
	const json = localStorage.getItem(key)
	return JSON.parse(json)
}
