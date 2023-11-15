interface SignUpAction {
	type: string
	payload: {
		userName: string
		password: string
	}
}

const initialState = {
	loggedInUser: null as { userName: string; password: string } | null
}

const signReducer = (state = initialState, action: SignUpAction) => {
	switch (action.type) {
		case 'SIGNUP_USER':
			return {
				...state,
				loggedInUser: {
					password: action.payload.password,
					userName: action.payload.userName
				}
			}
		case 'LOGOUT_ESER':
			return {
				...state,
				loggedInUser: null
			}

		case 'RESET_AUTH':
			return initialState // Сбросить состояние до начального
		default:
			return state
	}
}

export default signReducer
