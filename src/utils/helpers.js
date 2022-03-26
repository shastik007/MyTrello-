export const saveToLocalStorage = (key, value) => {
	return localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key) => {
	const json = localStorage.getItem(key)
	return JSON.parse(json)
}

export const removeLocalStorage = (key) => {
	return localStorage.removeItem(key)
}

export const convertFireBaseData = (data) => {
	const transformedData = []
	for (const key in data) {
		transformedData.push({
			id: key,
			...data[key],
		})
	}

	return transformedData
}
