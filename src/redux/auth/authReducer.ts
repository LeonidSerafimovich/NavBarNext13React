// reducers/authReducer.ts

const initialState = {
	loggedInUser: null
}

const authReducer = (
	state = initialState,
	action: { type: string; payload: { email: string; password: string } }
) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return {
				...state,
				loggedInUser: {
					email: action.payload.email,
					password: action.payload.password
				}
			}
		default:
			return state
	}
}

export default authReducer
