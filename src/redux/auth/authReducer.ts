// reducers/authReducer.ts

const initialState = {
	loggedInUser: null,
	avatar: ''
}

const authReducer = (
	state = initialState,
	action: {
		type: string
		payload: {
			avatar: any
			email: string
			password: string
		}
	}
) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return {
				...state,
				loggedInUser: {
					email: action.payload.email,
					password: action.payload.password,
					avatar: action.payload.avatar
				}
			}
		default:
			return state
	}
}

export default authReducer
