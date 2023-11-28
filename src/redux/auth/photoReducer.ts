const initialState = {
	// ... другие поля ...
	userPhoto: ''
}

const photoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER_PHOTO':
			return {
				...state,
				userPhoto: action.payload
			}
		// ... другие case ...
		default:
			return state
	}
}

export default photoReducer
